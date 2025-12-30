"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="rounded-full px-3 h-10"
      aria-label="Toggle language"
    >
      {language === "en" ? "FR" : "EN"}
    </Button>
  )
}
