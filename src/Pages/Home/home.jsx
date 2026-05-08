import Preview from "../../Component/Preview/Preview"
import Hero from "../../Component/Hero/hero"
import "../Home/home.css"
function Home() {
  return (
    <div>
      <main>
        <Hero />
      </main>

      <main>
        <Preview />
      </main>
    </div>
  )
}
export default Home 