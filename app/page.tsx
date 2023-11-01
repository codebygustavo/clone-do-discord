import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const state = true

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">
        Hello World, hello Discord Clone
      </p>
      <div className="flex flex-col w-32 gap-1">
        <Button>
          click Me
        </Button>
        <Button variant="destructive">
          click Me
        </Button>
        <Button variant="ghost">
          click Me
        </Button>
        <Button variant="ghost" className="bg-indigo-500">
          click Me
        </Button>
        <Button className={cn(
          "bg-idnigo-500",
          state && "bg-red-500"
        )}>
          click Me
        </Button>
      </div>
    </div>
  )
}
