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
        <CardContent className="space-y-2 text-sm">
          <div className="flex gap-2 items-end">
            <Avatar className="border">
              <AvatarFallback>VM</AvatarFallback>
              <AvatarImage src="https://github.com/vitormarkis.png"></AvatarImage>
            </Avatar>
            <p>
              <strong className="block">Vitor Markis:</strong>
              <span>Como criar um Design System?</span>
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-end">
              <Avatar className="border">
                <AvatarFallback>RS</AvatarFallback>
                <AvatarImage src="https://github.com/rocketseat.png"></AvatarImage>
              </Avatar>
              <p>
                <strong className="block">Bot:</strong>
                {/* <span>Como criar um Design System?</span> */}
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse odio aperiam
                  voluptas autem sapiente quisquam, magnam expedita ea suscipit soluta excepturi
                  commodi, fugit dolorum iure quis aspernatur in architecto fuga?
                </span>
              </p>
            </div>
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
