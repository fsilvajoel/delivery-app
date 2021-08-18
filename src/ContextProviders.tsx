// import { MessagesContextProvider } from '~hooks/useMessages';
// import { MessagesFilterProvider } from '~hooks/useMessagesFilter';
// import { ProjectsContextProvider } from '~hooks/useProjects';
import { ProductsContextProvider } from '~hooks/useProducts';
import { UserContextProvider } from '~hooks/useUser';

const ContextProviders: React.FC = ({ children }) => (
  <UserContextProvider>
    <ProductsContextProvider>{children}</ProductsContextProvider>
    {/* <ProjectsContextProvider> */}
    {/* <MessagesContextProvider> */}
    {/* <MessagesFilterProvider>{children}</MessagesFilterProvider> */}
    {/* </MessagesContextProvider> */}
    {/* </ProjectsContextProvider> */}
  </UserContextProvider>
);

export default ContextProviders;
