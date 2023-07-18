import { FaChevronDown } from 'react-icons/fa';

import { expandCollapseIconProps } from './expandCollapseIconProps';

type Props = Parameters<typeof FaChevronDown>[0];

const ExpandIcon: React.VFC<Props> = (props) => {
	return <FaChevronDown {...expandCollapseIconProps} {...props} />;
};

export default ExpandIcon;
