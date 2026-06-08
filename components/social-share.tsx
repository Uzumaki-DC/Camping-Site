"use client"

import { useState } from "react"
import { Share2, Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialShareProps {
  url: string
  title: string
  description?: string
  image?: string
  className?: string
  variant?: "default" | "compact"
}

// Custom icons
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0a12 12 0 00-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.14 0 3.78-2.26 3.78-5.52 0-2.89-2.08-4.9-5.05-4.9-3.44 0-5.46 2.58-5.46 5.25 0 1.04.4 2.16.9 2.77a.36.36 0 01.08.35l-.34 1.36c-.05.22-.18.27-.41.16-1.54-.72-2.5-2.97-2.5-4.78 0-3.89 2.82-7.46 8.14-7.46 4.28 0 7.6 3.05 7.6 7.12 0 4.25-2.68 7.67-6.4 7.67-1.25 0-2.42-.65-2.83-1.42l-.77 2.93c-.28 1.08-1.03 2.43-1.54 3.26A12 12 0 1012 0z"/>
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.24-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zm-5.5 7.53h-.02a9.88 9.88 0 01-5.03-1.38l-.36-.22-3.74.98 1-3.65-.24-.38a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 012.9 7c0 5.45-4.44 9.89-9.9 9.89zm8.41-18.3A11.82 11.82 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.18 1.6 6L0 24l6.17-1.62a11.93 11.93 0 005.8 1.5h.01c6.62 0 12-5.37 12-12 0-3.2-1.25-6.22-3.52-8.48l-.08.01z"/>
    </svg>
  )
}

const shareButtons = [
  {
    name: "Facebook",
    icon: Facebook,
    color: "hover:bg-[#1877F2]",
    getUrl: (url: string, title: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "Twitter",
    icon: Twitter,
    color: "hover:bg-[#1DA1F2]",
    getUrl: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    name: "Pinterest",
    icon: PinterestIcon,
    color: "hover:bg-[#E60023]",
    getUrl: (url: string, title: string, _desc?: string, image?: string) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}${image ? `&media=${encodeURIComponent(image)}` : ""}`,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "hover:bg-[#0A66C2]",
    getUrl: (url: string, title: string) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    color: "hover:bg-[#25D366]",
    getUrl: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
]

export function SocialShare({
  url,
  title,
  description,
  image,
  className,
  variant = "default",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (variant === "compact") {
    return (
      <div className={cn("relative", className)}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 hover:bg-accent rounded-full transition-colors"
          aria-label="Share"
        >
          <Share2 className="h-5 w-5" />
        </button>
        
        {showMenu && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setShowMenu(false)}
            />
            <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded-lg shadow-lg p-2 z-50 min-w-[200px]">
              {shareButtons.map((button) => (
                <a
                  key={button.name}
                  href={button.getUrl(url, title, description, image)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => setShowMenu(false)}
                >
                  <button.icon className="h-4 w-4" />
                  <span className="text-sm">{button.name}</span>
                </a>
              ))}
              <button
                onClick={() => {
                  copyToClipboard()
                  setShowMenu(false)
                }}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors w-full"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Link2 className="h-4 w-4" />
                )}
                <span className="text-sm">{copied ? "Copied!" : "Copy Link"}</span>
              </button>
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-sm text-muted-foreground mr-2">Share:</span>
      {shareButtons.map((button) => (
        <a
          key={button.name}
          href={button.getUrl(url, title, description, image)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
            "bg-accent text-foreground hover:text-white",
            button.color
          )}
          aria-label={`Share on ${button.name}`}
        >
          <button.icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className={cn(
          "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
          "bg-accent hover:bg-primary hover:text-primary-foreground",
          copied && "bg-green-500 text-white"
        )}
        aria-label="Copy link"
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  )
}

// Social Follow buttons for profiles/pages
interface SocialFollowProps {
  platform: "instagram" | "facebook" | "tiktok" | "youtube" | "pinterest" | "twitter"
  handle: string
  className?: string
}

export function SocialFollow({ platform, handle, className }: SocialFollowProps) {
  const platforms = {
    instagram: {
      url: `https://instagram.com/${handle}`,
      icon: () => <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.67.51.72.28 1.33.65 1.94 1.26.6.6.98 1.22 1.26 1.94.27.7.46 1.5.51 2.67.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.51 2.67-.28.72-.65 1.33-1.26 1.94-.6.6-1.22.98-1.94 1.26-.7.27-1.5.46-2.67.51-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.67-.51-.72-.28-1.33-.65-1.94-1.26-.6-.6-.98-1.22-1.26-1.94-.27-.7-.46-1.5-.51-2.67-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.97.51-2.67.28-.72.65-1.33 1.26-1.94.6-.6 1.22-.98 1.94-1.26.7-.27 1.5-.46 2.67-.51 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.78.3-1.44.71-2.1 1.37-.66.66-1.07 1.32-1.37 2.1-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.78.71 1.44 1.37 2.1.66.66 1.32 1.07 2.1 1.37.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.78-.3 1.44-.71 2.1-1.37.66-.66 1.07-1.32 1.37-2.1.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.78-.71-1.44-1.37-2.1-.66-.66-1.32-1.07-2.1-1.37-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-10.85a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"/></svg>,
      label: "Follow on Instagram"
    },
    facebook: {
      url: `https://facebook.com/${handle}`,
      icon: Facebook,
      label: "Follow on Facebook"
    },
    tiktok: {
      url: `https://tiktok.com/@${handle}`,
      icon: () => <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>,
      label: "Follow on TikTok"
    },
    youtube: {
      url: `https://youtube.com/${handle}`,
      icon: Youtube,
      label: "Subscribe on YouTube"
    },
    pinterest: {
      url: `https://pinterest.com/${handle}`,
      icon: PinterestIcon,
      label: "Follow on Pinterest"
    },
    twitter: {
      url: `https://twitter.com/${handle}`,
      icon: Twitter,
      label: "Follow on Twitter"
    }
  }

  const { url, icon: Icon, label } = platforms[platform]

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors",
        className
      )}
      aria-label={label}
    >
      {typeof Icon === "function" ? <Icon /> : <Icon className="h-5 w-5" />}
      <span className="text-sm font-medium">@{handle}</span>
    </a>
  )
}
