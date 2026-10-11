export const TRACKS = ['All', 'Product', 'Engineering', 'Design', 'Leadership'];

// Static catalog data stands in for conference data that would normally come from a server.
export const events = [
  { id: 'opening-keynote', title: 'Building products people trust', speaker: 'Maya Chen', track: 'Product', time: '09:00', duration: '35 min', available: true, description: 'A practical look at earning user confidence through thoughtful product decisions.' },
  { id: 'design-systems', title: 'Design systems that make room to grow', speaker: 'Jordan Lee', track: 'Design', time: '09:45', duration: '40 min', available: true, description: 'Patterns for keeping a shared visual language flexible as teams and products evolve.' },
  { id: 'react-rendering', title: 'A clearer mental model for React rendering', speaker: 'Alex Rivera', track: 'Engineering', time: '10:30', duration: '45 min', available: false, description: 'Understand updates, rendering, and the choices that keep interfaces responsive.' },
  { id: 'team-feedback', title: 'Feedback loops for high-trust teams', speaker: 'Priya Nair', track: 'Leadership', time: '11:15', duration: '30 min', available: true, description: 'Make learning and honest feedback part of the everyday rhythm of a team.' },
  { id: 'state-models', title: 'Modeling state without the guesswork', speaker: 'Sam Okafor', track: 'Engineering', time: '13:00', duration: '40 min', available: true, description: 'Turn a fuzzy feature into a small, explicit state model that is easy to reason about.' },
  { id: 'accessible-by-default', title: 'Accessibility as a product advantage', speaker: 'Elena García', track: 'Product', time: '13:45', duration: '35 min', available: false, description: 'Build more inclusive experiences by making accessibility part of product discovery.' },
  { id: 'motion-language', title: 'Motion with meaning', speaker: 'Noah Kim', track: 'Design', time: '14:30', duration: '30 min', available: true, description: 'Use purposeful motion to guide attention and make interface feedback feel natural.' },
  { id: 'leading-change', title: 'Helping teams navigate change', speaker: 'Avery Brooks', track: 'Leadership', time: '15:15', duration: '40 min', available: true, description: 'A toolkit for making change feel understandable, collaborative, and actionable.' },
];
