import "./Acerca.css";
import Container from "../../components/Acerca/Container";
import Grid from "../../components/Acerca/Grid";
import Text from "../../components/Acerca/Text";
import Image from "../../components/Acerca/Image";

function Acerca() {
  return (
    <div className="page-container">
      <Grid>
        <Image />
        <div className="flex flex-col md:justify-center">
          <Text />
        </div>
      </Grid>
    </div>
  );
}

export default Acerca;
