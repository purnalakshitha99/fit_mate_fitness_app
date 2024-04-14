import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const SideBar = () => {
  return (
    <Card className="w-full md:w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-background text-white fixed inset-y-0 left-0 z-50">
      <div className="mb-2 p-4 flex flex-col items-center md:items-start space-y-5">
        <img
          className="h-20 w-20 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <Typography className="text-2xl font-bold">Sasida Dilhan</Typography>
      </div>
      <List className="md:space-y-10">
        <ListItem className="hover:bg-hoverBackground p-3">
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
        <ListItem className="hover:bg-hoverBackground p-3">
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          My Activities
        </ListItem>
        <ListItem className="hover:bg-hoverBackground p-3">
          <ListItemPrefix>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 2a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1h-2v9a2 2 0 01-2 2H8a2 2 0 01-2-2v-9H3a1 1 0 01-1-1V2zm4 4h8v1H7V6zm1 3h6v6H8V9z"
              clipRule="evenodd"
            />
          </svg>
          </ListItemPrefix>
          Workout Post
        </ListItem>
        <ListItem className="hover:bg-hoverBackground p-3">
          <ListItemPrefix>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 7a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V7zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"
              clipRule="evenodd"
            />
          </svg>
          </ListItemPrefix>
          Meal Plan
        </ListItem>
        <ListItem className="hover:bg-hoverBackground p-3">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem className="hover:bg-hoverBackground p-3">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};

export default SideBar;
