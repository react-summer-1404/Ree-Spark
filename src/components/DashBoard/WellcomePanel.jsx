const WellcomePanel = ({ profile }) => {
  return (
    <div>
      <h1>خوش آمدید، {profile.fName}</h1>
      <p>ایمیل شما: {profile.email}</p>
    </div>
  );
};

export { WellcomePanel };
