"use client"
import React from "react"
import { twMerge } from "tailwind-merge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useChat } from "ai/react"
import { messages } from "@/app/mock/messages"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Chat({ ...props }: ChatProps) {
  const { input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  })

  return (
    <Card
      {...props}
      className={twMerge(
        "w-[400px] grid grid-rows-[min-content_1fr_min-content] overflow-hidden",
        props.className
      )}
    >
      <CardHeader>
        <CardTitle>Chat Box</CardTitle>
        <CardDescription>Criando um chat box utilizando API da Vercel.</CardDescription>
      </CardHeader>
      <ScrollArea className="h-[70vh] mr-2">
        <CardContent className="space-y-4 text-sm">
          {messages.map(msg => (
            <div
              key={msg.id}
              className="flex gap-2"
            >
              {msg.role === "user" && (
                <Avatar className="border">
                  <AvatarFallback>VM</AvatarFallback>
                  <AvatarImage src="https://github.com/vitormarkis.png"></AvatarImage>
                </Avatar>
              )}
              {msg.role === "assistant" && (
                <Avatar className="border">
                  <AvatarFallback>RS</AvatarFallback>
                  <AvatarImage src="https://github.com/rocketseat.png"></AvatarImage>
                </Avatar>
              )}

              <p>
                <strong className="block">{msg.role === "user" ? "Me:" : "Bot:"}</strong>
                <span>{msg.content}</span>
              </p>
            </div>
          ))}
        </CardContent>
      </ScrollArea>
      <CardFooter className="relative">
        <div className="absolute rounded- inset-0 bg-gradient-to-t from-black to-transparent h-[200%] -translate-y-1/2" />
        <form
          onSubmit={handleSubmit}
          className="z-10 flex flex-col gap-2 grow"
        >
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="How can I help you?"
          />
          <Button
            variant="default"
            type="submit"
          >
            default
          </Button>
          <Button
            variant="destructive"
            type="submit"
          >
            destructive
          </Button>
          <Button
            variant="ghost"
            type="submit"
          >
            ghost
          </Button>
          <Button
            variant="link"
            type="submit"
          >
            link
          </Button>
          <Button variant="outline">outline</Button>
          <Button variant="secondary">secondary</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
