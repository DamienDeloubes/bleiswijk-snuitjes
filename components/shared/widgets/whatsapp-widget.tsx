"use client";

import { openWhatsapp } from "@/utils/whatsapp";
import { useState } from "react";

export const WhatsAppWidget = () => {
  const [isVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="whatsapp-widget"
        onClick={openWhatsapp}
        title="Chat with us on WhatsApp"
      >
        <div className="whatsapp-icon">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.403" />
          </svg>
        </div>
        <span className="whatsapp-text">Stuur een berichtje</span>
      </div>

      <style jsx>{`
        .whatsapp-widget {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 999;
          background: #25d366;
          border-radius: 50px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
          font-weight: 600;
          font-size: 14px;
          font-family: inherit;
          text-decoration: none;
        }

        .whatsapp-widget:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
          background: #20c053;
        }

        .whatsapp-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .whatsapp-text {
          white-space: nowrap;
          animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .whatsapp-widget {
            bottom: 15px;
            right: 15px;
            padding: 10px 15px;
            font-size: 13px;
          }

          .whatsapp-text {
            display: none;
          }

          .whatsapp-widget {
            padding: 12px;
            border-radius: 50%;
          }

          .whatsapp-icon {
            width: 28px;
            height: 28px;
          }
        }

        @media (max-width: 480px) {
          .whatsapp-widget {
            bottom: 10px;
            right: 10px;
            padding: 10px;
          }

          .whatsapp-icon {
            width: 24px;
            height: 24px;
          }

          .whatsapp-icon svg {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </>
  );
};
