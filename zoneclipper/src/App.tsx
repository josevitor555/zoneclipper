
// Style CSS
import './App.css'

// Shadcn UI
import { Button } from '@/components/ui/button'

const App = () => {

  return (
    <div className="app">
      <h1 className='text-3xl font-bold underline'> ZoneClipper AI </h1>

      <Button onClick={() => alert('Welcome to ZoneClipper AI')}>Click me</Button>
    </div>
  )
}

export default App;
