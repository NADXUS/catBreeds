import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import HeaderInformation from "../../components/headerInformation";
import ImageInformation from "../../components/ImageInformation";
import DescriptionInformation from "../../components/descriptionInformation";
import InformationTemplate from "../../templates/detailInfo.template";
import { InformationController } from "./information.controller";

const $InformationController = new InformationController();

const Information = () => {
  const navigation = useNavigation();
  const [queryParams, setqueryParams] = useState({
    image: {
      url: "",
    },
    description: "",
    name: "",
  });

  useEffect(() => {
    $InformationController.getFromUrlParams(navigation, setqueryParams);
  }, []);
  return (
    <InformationTemplate>
      <HeaderInformation catName={queryParams.name} navigation={navigation} />
      <ImageInformation image={queryParams.image.url} />
      <DescriptionInformation description={queryParams.description} />
    </InformationTemplate>
  );
};

export default Information;
