import MainLayout from "../components/MainLayout/MainLayout";
import Titutlar2left from "../components/Titutlar2left";
import Titutlar2right from "../components/Titular2right";
import deco_three from '../deco_about/deco_three.png'
import deco_two from '../deco_about/deco_two.png'
import deco_one from '../deco_about/deco_one.png'




import './About.scss'



const About = () => {
  return (
    <MainLayout>
      <div className="about-container">
        <Titutlar2left title="Sobre això" img={deco_three}>
        En cinc llices de camp. De la Comtessa lo qual. Fama e contínua bona memòria los hòmens virtuosos e. Humanes Mereixedors són d'honor glòria e de fama e. Al gentilhom o generós qui vol rebre l'orde de. Part serà del principi de cavalleria; la segona
        </Titutlar2left>
        <Titutlar2right title="Descobreix" img={deco_two}>
        En cinc llices de camp. De la Comtessa lo qual. Fama e contínua bona memòria los hòmens virtuosos e. Humanes Mereixedors són d'honor glòria e de fama e. Al gentilhom o generós qui vol rebre l'orde de. Part serà del principi de cavalleria; la segona
        </Titutlar2right>
        <Titutlar2left title="Respecte" img={deco_one}>
        En cinc llices de camp. De la Comtessa lo qual. Fama e contínua bona memòria los hòmens virtuosos e. Humanes Mereixedors són d'honor glòria e de fama e. Al gentilhom o generós qui vol rebre l'orde de. Part serà del principi de cavalleria; la segona
        </Titutlar2left>
      </div>
    </MainLayout>
   
  );
}
 
export default About;