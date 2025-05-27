// Sample team member data
const teamMembers = [
  {
    id: 1,
    name: 'Alexandra Johnson',
    position: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Alexandra founded the company in 2010 with a vision to create innovative products that improve people\'s lives.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CTO',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Michael oversees all technical aspects of the company, from product development to IT infrastructure.',
  },
  {
    id: 3,
    name: 'Sarah Rodriguez',
    position: 'Head of Design',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Sarah leads our design team, ensuring that all our products are not only functional but also aesthetically pleasing.',
  },
  {
    id: 4,
    name: 'David Wilson',
    position: 'Marketing Director',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'David develops and implements our marketing strategies to build brand awareness and drive sales growth.',
  },
];

const TeamMembers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map(member => (
        <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-square">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sky-600 font-medium mb-3">{member.position}</p>
            <p className="text-gray-700 text-sm">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;