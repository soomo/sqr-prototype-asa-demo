import { FaChevronUp } from 'react-icons/fa';

import { expandCollapseIconProps } from './expandCollapseIconProps';

type Props = Parameters<typeof FaChevronUp>[0];

const CollapseIcon: React.VFC<Props> = (props) => {
	return <FaChevronUp {...expandCollapseIconProps} {...props} />;
};

export default CollapseIcon;
