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
    <>
      <Card className="w-full md:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-background text-white ">
        <div className="mb-2 p-4 flex flex-col items-center md:items-start space-y-5 ">
          <img
            className="h-20 w-20 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <Typography className="text-2xl font-bold text-center md:text-left">
            Sasida Dilhan
          </Typography>{" "}
          {/* Adjusted alignment for mobile */}
        </div>
        <List className="md:space-y-5">
          {" "}
          {/* Adjusted spacing for mobile */}
          <ListItem className=" hover:bg-hoverBackground p-2">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem className=" hover:bg-hoverBackground p-2">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem className=" hover:bg-hoverBackground p-2">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem className=" hover:bg-hoverBackground p-2">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem className=" hover:bg-hoverBackground p-2">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className=" hover:bg-hoverBackground p-2">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default SideBar;
