import { createLazyFileRoute } from '@tanstack/react-router';
import { Box, Grid, ScrollArea, TextArea } from '@radix-ui/themes';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <Box width="98%" className="p-2.5">
      <Grid columns="2" gap="2" className="divide-x">
        <Box>
          {/* Temporary usage until markdown editor is installed */}
          <ScrollArea scrollbars="vertical" type="scroll">
            <TextArea placeholder="Enter your content here..." />
          </ScrollArea>
        </Box>
        <Box className="pl-2">
          <ScrollArea scrollbars="vertical" type="scroll">
            <h1>Preview area</h1>
          </ScrollArea>
        </Box>
      </Grid>
    </Box>
  );
}
