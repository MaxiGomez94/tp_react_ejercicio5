import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Footer from './components/Footer';
import FormularioTarea from './components/FormularioTarea';

const App=()=> {
  return (
    <>

    <main className='container'>
      <h2 className='text-center py-5'>Lista Tarea Con LocalStorage Ejercicio 5 :</h2>

      <FormularioTarea></FormularioTarea>

    </main>

    <Footer></Footer>
    </>
  )
}

export default App
