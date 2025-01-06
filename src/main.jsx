import {createRoot} from 'react-dom/client'
import datas from './data/data.js'
import Header from './components/header.jsx'
import Main from './components/main.jsx'
import './main.css'

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <div className='wrapper'>
        {datas.map(data => 
                <Main 
                    key = {data.name}
                    data = {data} 
                />
            )
        }
        </div>
    </>
)