import Header from './components/Header'
import Tasks from './components/Tasks'
const App = () => {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
}
export default App
