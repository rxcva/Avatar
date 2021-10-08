import './App.css'; 
import { Avatar } from './Avatar';   
import { ImageComponent } from './ImageComponent';
import q1 from './images/q1.jpg' 
import q2 from './images/q2.jpg' 
import q3 from './images/q3.jpg' 
import { Like } from './Like';


function App() {
  return (
    <div >  
    
    <Avatar avatar={q1} fullname={'Vlada'}></Avatar>
    <Avatar avatar={q2} fullname={'Ivan'}></Avatar> 
    <Avatar avatar={q3} fullname={'Eva'}></Avatar> 
    <ImageComponent width={'30px'}  height={'30px'}></ImageComponent> 
    <ImageComponent width={'40px'}  height={'40px'}></ImageComponent> 
    <ImageComponent width={'50px'}  height={'50px'}></ImageComponent> 
    <ImageComponent width={'60px'}  height={'60px'}/>
    <Like/>

    
    </div>
  );
}

export default App;
