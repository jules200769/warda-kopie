
import React from 'react';

const reviews = [
  {
    name: 'Daisy Van De Zanden',
    stars: 5,
    text: 'Super fijne rijschool! Niet alleen leerzaam, maar ook super gezellig. Elke les was een feestje met Ibo. Zeker een aanrader!!',
  },
  {
    name: 'Monique Hoofs',
    stars: 5,
    text: 'Goede rijschool en Ibo weet de leerling te motiveren en enthousiast te maken. Leuke ervaring geweest voor mijn zoon',
  },
  {
    name: 'Chajmae Amrani',
    stars: 5,
    text: 'Zeer goede rijschool. Je krijgt duidelijk informatie, en de rijinstructeur heeft veel geduld is heel vriendelijk en super sociaal. Ik heb met alle plezier mijn rijbewijs gehaald. Beste rijschool!',
  },
  {
    name: 'Mike de Kok',
    stars: 5,
    text: 'Top rijschool. Nemen goed de tijd en leren je onder de knie te krijgen zodat je er op kan!!!',
  },
  {
    name: 'Sara El Mahdi',
    stars: 5,
    text: 'Heel blij dat ik voor Rijschool Caran heb gekozen. De instructeur is erg geduldig en legt alles rustig uit. In één keer geslaagd!',
  },
  {
    name: 'Thomas Bakker',
    stars: 5,
    text: 'Fantastische ervaring! Flexibele lestijden en een heel prettige sfeer. Ibo maakt autorijden leuk en begrijpelijk.',
  },
  {
    name: 'Nadia Youssef',
    stars: 5,
    text: 'Ik was heel zenuwachtig maar dankzij de rustige en professionele aanpak van Ibo heb ik mijn rijbewijs in één keer gehaald!',
  },
  {
    name: 'Daan Vermeulen',
    stars: 5,
    text: 'Aanrader voor iedereen! Goede uitleg, moderne auto en een instructeur die echt om je geeft. Bedankt Rijschool Caran!',
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? '#f59e0b' : '#d1d5db'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ReviewCard: React.FC<{ review: typeof reviews[0] }> = ({ review }) => (
  <div className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-lg">
    <h4 className="font-bold text-slate-900 text-base mb-2">{review.name}</h4>
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < review.stars} />
      ))}
    </div>
    <p className="text-slate-600 text-sm leading-relaxed">{review.text}</p>
  </div>
);

const GoogleReviews: React.FC = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Reviews</h2>
          <div className="flex items-center justify-center gap-3">
            <GoogleLogo />
            <span className="text-white/80 text-base font-medium">(4,8/5) Google</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled={true} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="reviews-track flex gap-6 w-max">
          {reviews.map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
          {reviews.map((review, i) => (
            <ReviewCard key={`b-${i}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
