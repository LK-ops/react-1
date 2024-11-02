import './App.css'
import ButtonBox from './ButtonBox'






function App() {


  return (
    <>
    <div style={{display:'flex',width:'100vw',height:'100vh',background: '#141414',justifyContent: 'center'}}>
      <div style={{display:'flex',padding: '40px',gap: '20px',flexDirection: 'column' ,width:'384px',height:'500px',background:'#1F1F1F',alignItems:'center'}}>
      <img style={{width:'88px',height:'88px'}} src="/profile-pic.svg" alt="" />
      <div style={{color: 'white',fontSize:'24px',fontFamily: 'Inter',fontWeight: '600'}}>Jessica Randall</div>
      <div style={{color: '#C4F82A',fontSize:'14px',fontFamily: 'Inter',fontWeight: '700'}}>London, United Kingdom</div>
      <div style={{color: 'white',fontFamily: 'Inter',fontSize: '14px'}}>"Front-end developer and avid reader."</div>
      <ButtonBox/>

      </div>
    </div>
    </>
  )
}

export default App 

