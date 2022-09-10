import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Button } from "../../Buttons/style";
import { ButtonEmpty, Form, Input } from "./style";


export const InputSearchBar = ({
  setSearchBar,
  filterSearchBar,
  setIsFiltred,
  setFiltredList,
  isFiltred
}) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchBar(search);
    filterSearchBar();
    setIsFiltred(true);
  };
  return (
    <Form onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Digitar pesquisa"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></Input>
      {isFiltred?
        <ButtonEmpty
          onClick={() => {
            setFiltredList([]);
            setIsFiltred(false);
            setSearch("")
          }}
        >
          <AiFillCloseCircle/>
        </ButtonEmpty>
        :
        <></>
      }
  
      <Button type="submit">Pesquisar</Button>
    </Form>
  );
};
