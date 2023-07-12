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

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen bg-background">
      <Card className="w-[400px] h-[400px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat Box</CardTitle>
          <CardDescription>Criando um chat box utilizando API da Vercel.</CardDescription>
        </CardHeader>
        <CardContent className="bg-red-500">
          <div>
            <Avatar>
              <AvatarFallback>VM</AvatarFallback>
              <AvatarImage src="https://github.com/vitormarkis.png"></AvatarImage>
            </Avatar>
            <p>Como criar um Design System?</p>
          </div>
          <div>
            <Avatar>
              <AvatarFallback>RS</AvatarFallback>
              <AvatarImage src="https://github.com/rocketseat.png"></AvatarImage>
            </Avatar>
          </div>
        </CardContent>
        <CardFooter>
          <Input placeholder="How can I help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
