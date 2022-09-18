import Card from './Card';
import experiences from '../Experiences';

function ExperiencePage() {
  return (
    <div>
      <h1>my experiences</h1>
    
      {experiences.map((element) => (
        <Card
          key={element.key}
          jobTitle={element.title}
          companyName={element.company}
          description={element.description}
          startDate={element.startDate}
          endDate={element.endDate}
        />
      ))}
    </div>
  );
}

export default ExperiencePage;
