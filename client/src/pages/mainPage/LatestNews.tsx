import { Card } from "react-bootstrap";
import { StyledMedium } from "../../componets/styled/mainPageStyledComponets/MainScreenStyling";
import { useNavigate } from "react-router-dom";

function LatestNews() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      "/News/Pokémon:%20The%20Johto%20Journeys%20Episodes%20Added%20to%20Pokémon%20TV"
    );
  };
  return (
    <>
      <StyledMedium onClick={handleClick}>
        <Card.Img
          variant="top"
          src="data:image/jpeg;base64,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EySOV4f7wFjiAeyytxYBvNR8l6FvBcTK1znjKQOwLGrr50dq035r6Ec4C5OltT3DeuJ4pikVTXmefN0PSAe6LnomGwAF9xt6lUm2nr3tLHVTy1wLSOYIsReyh26aXXXguGi4Q2STOJJH03TMMrdybIHaJraxotoeCYiZ9TDI0DQgtNnyJ0q7+i6IMGwOsN4JhE48GuyH9kgXuL2aQZgTUSObyAYL/qC5vYHfZXo6iRujXvaOQe4D6qWMTOAPc4yRlfvayQjwdo4LD/Z7ENGVpaWnlbm34jULoPtPq4jFDStc0vDw/ffIxjHN1PM33dhXODx716vqSSSTvJ1J7yVQqJUcUEeHiJLW5jmO7nONk86G1C/urzhPDnYRrjIRmdV1sKFDx8VRERcVboiIiIiIsoiIiIiIiwiqCeZVh1OL5mktdzYVeRbscWG2rjNBHM3LI0HxWfRbR10OhImb+brfuGqmKbbqE6TRvjP7h/a1kISe1Sm4xw3Fqin9nIXaxOLe7cfn6re4NpaJ+6do7HXB9VmMxOnO6aL97f7XM3U7D8Ctmii+VdRjGHcFVzvZvEA9l7fqP4XUTiMA3zRfvb/ahMRfhjnmSWYZiADlebaf4rSfsUXL6r22ljHwLrHxExG47B7lr/4zO7Rzm/X8LaIdqKCnaWU7Xuubm19Tuvdx7AsKs2uq5NIWNiHM+87109FEtsN1wi4S497zmO/UqfB7NRN/yPJ7hp+VbljfIc08jpD2m6uN03aKqoob5HPNkq+w+Dhw4qJoH39d0uiItFJRERERERERERERERYRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERf//Z"
        />
        <Card.Body
          style={{
            backgroundColor: "#0796ad",
            borderEndStartRadius: "5px",
            borderEndEndRadius: "5px",
          }}
        >
          <Card.Text>Check out our latest News!</Card.Text>
        </Card.Body>
      </StyledMedium>
    </>
  );
}

export default LatestNews;