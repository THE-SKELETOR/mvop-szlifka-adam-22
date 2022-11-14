const NavItem = (props) => {
    return (
        <button class="text-gray-600 hover:text-gray-800 hover:font-bold"> {props.label} </button>
    );
};

export default NavItem;