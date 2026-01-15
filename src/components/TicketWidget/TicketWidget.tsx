import { useEffect, useRef, useState } from 'react'
import { Typography } from '@mui/material'
import styles from './TicketWidget.module.scss'

interface TicketWidgetProps {
  eventId?: string
}

declare global {
  interface Window {
    TCWidget?: {
      createWidget: (config: {
        iframeContainerId: string
        iframeUrl: string
      }) => void
    }
  }
}

const TicketWidget = ({ eventId }: TicketWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const adjustIframeHeight = () => {
      const iframe = containerRef.current?.querySelector('iframe')
      if (iframe) {
        // Attendre que l'iframe soit chargée
        iframe.onload = () => {
          try {
            // Essayer d'accéder au contenu de l'iframe pour obtenir sa hauteur réelle
            // Note: Cela peut échouer à cause de la politique CORS
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
            if (iframeDoc) {
              const height = iframeDoc.body?.scrollHeight || iframeDoc.documentElement?.scrollHeight
              if (height) {
                iframe.style.height = `${height}px`
              }
            }
          } catch (e) {
            // Si on ne peut pas accéder au contenu (CORS), on définit une hauteur minimale
            iframe.style.minHeight = '800px'
          }
        }
        // Définir une hauteur minimale par défaut
        iframe.style.minHeight = '800px'
      }
    }

    const initializeWidget = () => {
      if (window.TCWidget && containerRef.current && eventId) {
        try {
          const containerId = `tc-container-iframe-${eventId}`
          window.TCWidget.createWidget({
            iframeContainerId: containerId,
            iframeUrl: `//ticketscandy.com/e/${eventId}/embed`,
          })
          
          // Attendre un peu que l'iframe soit créée
          setTimeout(() => {
            adjustIframeHeight()
            setIsLoading(false)
          }, 1000)
        } catch (error) {
          console.error('Error initializing TicketsCandy widget:', error)
          setIsLoading(false)
        }
      }
    }

    const loadScript = () => {
      if (scriptLoadedRef.current) {
        initializeWidget()
        return
      }

      // Vérifier si le script existe déjà
      const existingScript = document.querySelector(
        'script[src="https://ticketscandy.com/assets/javascript/tc_widget.js"]'
      )

      if (existingScript) {
        scriptLoadedRef.current = true
        // Attendre que le script soit chargé
        if (window.TCWidget) {
          initializeWidget()
        } else {
          existingScript.addEventListener('load', initializeWidget)
        }
        return
      }

      const script = document.createElement('script')
      script.src = 'https://ticketscandy.com/assets/javascript/tc_widget.js'
      script.async = true
      script.onload = () => {
        scriptLoadedRef.current = true
        initializeWidget()
      }
      script.onerror = () => {
        console.error('Failed to load TicketsCandy widget script')
        setIsLoading(false)
      }
      document.body.appendChild(script)
    }

    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadScript)
    } else {
      loadScript()
    }

    // Surveiller les changements de taille de l'iframe
    const observer = new MutationObserver(() => {
      adjustIframeHeight()
    })

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
      })
    }

    // Nettoyage
    return () => {
      observer.disconnect()
    }
  }, [eventId])

  return (
    <div className={styles.ticketWidget}>
      {isLoading && (
        <div className={styles.loading}>
          <Typography variant="body2">Chargement de la billetterie...</Typography>
        </div>
      )}
      <div id={`tc-container-iframe-${eventId || 'default'}`} ref={containerRef}></div>
    </div>
  )
}

export default TicketWidget
