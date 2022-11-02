export const User = ({ name, company, avatar }) => {
  return (
    <div id="user">
      <h2>Name: {name}</h2>
      <h3>Company: {company}</h3>
      <img src={avatar} alt="avatar" />
    </div>
  );
};
