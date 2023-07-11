import Header from "./Header/Header";
import layoutData from "../../../content/global/layout.json";

export const Layout = ({ children }) => {
	return (
		<div>
			<Header data={layoutData?.header} />
			{children}
		</div>
	);
};
