import { createLazyFileRoute } from '@tanstack/react-router';
import { Box, Flex, ScrollArea } from '@radix-ui/themes';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <Box width="98%" className="h-[calc(99vh-_40px)] p-2.5">
      <Flex className="h-full divide-x">
        <Flex className="h-full" flexGrow="1">
          {/* Temporary usage until markdown editor is installed */}
          <ScrollArea className="h-full" scrollbars="vertical" type="scroll">
            <h1>Editor area</h1>
          </ScrollArea>
        </Flex>
        <Flex className="h-full pl-2" flexGrow="1">
          <ScrollArea className="h-full" scrollbars="vertical" type="scroll">
            <h1>Preview area</h1>
          </ScrollArea>
        </Flex>
      </Flex>
    </Box>
  );
}
