import PropTypes from "prop-types";

const Sidebar = ({ sidbarToggle }) => {
  return (
    <aside className="border-r-4 shadow-lg w-64 h-full">
      <div className="">
        <ul className="pt-5 text-[#4B72FD] dark:text-white">
          <li>Dashboard</li>
          <li>Statistic</li>
          <li>Loans</li>
          <li>Business</li>
        </ul>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  sidbarToggle: PropTypes.any,
};

export default Sidebar;
