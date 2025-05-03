import HomeHero from '../assets/HomeHero.png'

export default function Home() {
  return (
    <section id="home">
      <img className='homeHero' src={HomeHero} alt="Honest Auto Care Hero" />
    </section>
  );
}