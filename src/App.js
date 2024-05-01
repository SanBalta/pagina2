import './App.css';
import Header from './componentes/Header';
import PDFUno from './componentes/PDFUno';
import PDFDos from './componentes/PDFDos';
import Sidebar from './componentes/Sidebar';
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <div>
        <Header/>
        <div className='fila'>

          <div className='column-a'>
          <PDFViewer style={{width: 950,height: 500,marginLeft:10,}}>
            <PDFUno />
          </PDFViewer>
          </div>

          <div className='column-b'>
            
            <div className='bar_nav'>
              <a href='./PDFUno'><Sidebar registro_1="Oficio No. 253/F88/2024"/></a>
              <a href='./PDFDos'><Sidebar registro_2="Oficio No. 456/F87/2024"/></a>
              <a href='./PDFTres'><Sidebar registro_3="Oficio No. 456/F89/2024"/></a>
            </div>

            <div className='firma'>
              <img src="/images/firma.png" alt='firma digital'/>
              <p>Alejandro López Valdez</p>
            </div>

            <div className='btn'>
              <button>Firmar</button>
              <button>Enviar correo</button>
            </div>

          </div>
        </div>
      </div> 
  );
}

export default App;
