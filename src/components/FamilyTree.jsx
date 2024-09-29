import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // For close button icon

const FamilyTree = () => {
  const [selectedNode, setSelectedNode] = useState(null); // To manage the selected node's data
  const [drawerOpen, setDrawerOpen] = useState(false); // To control drawer visibility

  const data = {
    label: "Great-Great-Great-Great Grandfather",
    type: "person",
    className: "p-person",
    expanded: true,
    data: {
      name: "Alexander Smith",
      title: "Great-Great-Great-Great Grandfather",
    },
    children: [
      {
        label: "Great-Great-Great Grandfather",
        type: "person",
        className: "p-person",
        expanded: true,
        data: {
          name: "Edward Smith",
          title: "Great-Great-Great Grandfather",
        },
        children: [
          {
            label: "Great-Great Grandfather",
            type: "person",
            className: "p-person",
            expanded: true,
            data: {
              name: "George Smith",
              title: "Great-Great Grandfather",
            },
            children: [
              {
                label: "Great Grandfather",
                type: "person",
                className: "p-person",
                expanded: true,
                data: {
                  name: "William Smith",
                  title: "Great Grandfather",
                },
                children: [
                  {
                    label: "Grandfather",
                    type: "person",
                    className: "p-person",
                    expanded: true,
                    data: {
                      name: "James Smith",
                      title: "Grandfather",
                    },
                    children: [
                      {
                        label: "Father",
                        type: "person",
                        className: "p-person",
                        expanded: true,
                        data: {
                          name: "John Smith",
                          title: "Father",
                        },
                        children: [
                          {
                            label: "Son",
                            type: "person",
                            className: "p-person",
                            data: {
                              name: "David Smith",
                              title: "Son",
                            },
                            children: [
                              {
                                label: "Grandson",
                                type: "person",
                                className: "p-person",
                                data: {
                                  name: "Henry Smith",
                                  title: "Grandson",
                                },
                                children: [
                                  {
                                    label: "Great Grandson",
                                    type: "person",
                                    className: "p-person",
                                    data: {
                                      name: "Oliver Smith",
                                      title: "Great Grandson",
                                    },
                                  },
                                  {
                                    label: "Great Granddaughter",
                                    type: "person",
                                    className: "p-person",
                                    data: {
                                      name: "Emma Smith",
                                      title: "Great Granddaughter",
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            label: "Daughter",
                            type: "person",
                            className: "p-person",
                            data: {
                              name: "Sophia Smith",
                              title: "Daughter",
                            },
                          },
                        ],
                      },
                      {
                        label: "Aunt",
                        type: "person",
                        className: "p-person",
                        data: {
                          name: "Margaret Smith",
                          title: "Aunt",
                        },
                        children: [
                          {
                            label: "Cousin 1",
                            type: "person",
                            className: "p-person",
                            data: {
                              name: "Isabella Brown",
                              title: "Cousin 1",
                            },
                          },
                          {
                            label: "Cousin 2",
                            type: "person",
                            className: "p-person",
                            data: {
                              name: "Liam Brown",
                              title: "Cousin 2",
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "Great Uncle",
                    type: "person",
                    className: "p-person",
                    expanded: true,
                    data: {
                      name: "Robert Smith",
                      title: "Great Uncle",
                    },
                    children: [
                      {
                        label: "Cousin 3",
                        type: "person",
                        className: "p-person",
                        data: {
                          name: "Charlotte Smith",
                          title: "Cousin 3",
                        },
                      },
                      {
                        label: "Cousin 4",
                        type: "person",
                        className: "p-person",
                        data: {
                          name: "Lucas Smith",
                          title: "Cousin 4",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  // Function to handle node clicks
  const onNodeClick = (node) => {
    setSelectedNode(node); // Set the selected node data
    setDrawerOpen(true); // Open the drawer
  };

  const nodeTemplate = (node) => {
    return (
      <div
        className="flex flex-column align-items-center"
        onClick={() => onNodeClick(node)} // Trigger node click
        style={{ cursor: "pointer" }} // Change cursor to pointer on hover
      >
        <img
          alt={node.label}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`w-2rem shadow-2 flag flag-${node.data}`}
        />
        <div className="mt-3 font-medium text-lg">{node.label}</div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '100%', overflowY: "auto" }}>
      <br />
      <br />
      <OrganizationChart value={[data]} nodeTemplate={nodeTemplate} />
      
      {/* MUI Drawer for displaying node details */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ style: { width: '300px', padding: '20px' } }} // Adjust drawer width and padding
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {selectedNode ? selectedNode.label : "Details"}
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {selectedNode && (
          <Box mt={2}>
            <Typography variant="subtitle1">Name:</Typography>
            <Typography variant="body1">{selectedNode.data.name}</Typography>
            
            <Typography variant="subtitle1" mt={2}>Title:</Typography>
            <Typography variant="body1">{selectedNode.data.title}</Typography>
          </Box>
        )}
      </Drawer>
    </div>
  );
};

export default FamilyTree;
