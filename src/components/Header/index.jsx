import { InputSearchBar } from "./InputSearchBar";
import { Logotipo } from "./Logotipo";
import { HeaderPage } from "./style";

export const Header = ({ setSearchBar, filterSearchBar, setIsFiltred, isFiltred, setFiltredList }) => {
  return (
    <HeaderPage>
      <Logotipo></Logotipo>
      <InputSearchBar
        setSearchBar={setSearchBar}
        filterSearchBar={filterSearchBar}
        setIsFiltred={setIsFiltred}
        setFiltredList={setFiltredList}
        isFiltred={isFiltred}
      ></InputSearchBar>
    </HeaderPage>
  );
};
