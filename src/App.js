import logo from './logo.svg'
import Nav from './nav'
import Content from './Content'
import Data from './Data'


// import './App.css';

function App() {
  const content = Data.map(item => {
    return(
      <Content
        key={item.id}
        img={item.coverImg}
        location={item.location}
        country={item.country}
        // venue={item.venue}
        date={item.date}
        about={item.about}
      />
    )
  })
  return(
      <div>
          <Nav />
          <section>
            {content}
          </section>
      </div>
  )
}

export default App;
