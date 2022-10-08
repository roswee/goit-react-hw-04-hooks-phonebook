import { Phonebook } from "./Phonebook/Phonebook";
import style from "components/Phonebook/Phonebook.module.css"

const {phonebook} = style

export const App = () => {
  return (
    <div
    className={phonebook}
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Phonebook />
    </div>
  );
};
