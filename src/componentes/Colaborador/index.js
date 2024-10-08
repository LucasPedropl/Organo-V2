import "./colaborador.css";
import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

	function favoritar(){
		aoFavoritar(colaborador.id);
	}

	const propsfavorito = {
		size: 25,
		onClick: favoritar
	}

	return (
		<div className="colaborador">
			<IoIosCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
			<div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
				<img src={colaborador.imagem} alt={colaborador.nome} />
			</div>
			<div className="rodape">
				<h4>{colaborador.nome}</h4>
				<h5>{colaborador.cargo}</h5>
				<div className="favoritar">
					{colaborador.favorito ? (
						<FaHeart {...propsfavorito} color="#ff0000" />
					) : (
						<CiHeart {...propsfavorito} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Colaborador;
