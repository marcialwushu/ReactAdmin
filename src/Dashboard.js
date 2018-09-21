import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";



export default () => (
  <GridList cellHeight={180} style={{ display: "flex", flexDirection: "column" }}>
    <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
      <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>
            Lorem ipsum sic dolor amet...
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>
          Lorem ipsum sic dolor amet...
        </CardContent>
      </Card>

      
    </GridListTile>
  </GridList>
);
