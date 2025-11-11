import{j as a}from"./jsx-runtime-CDt2p4po.js";import{T as r,a as u,b as e,c as s}from"./tabs-AL9gAx29.js";import"./index-GiUgBvb1.js";import"./index-D5RHfiO2.js";import"./index-C8NrMXaH.js";import"./index-DBCqBOGF.js";import"./index-C4LwAND9.js";import"./index-BpW4hYpn.js";import"./utils-CytzSlOG.js";const N={title:"Components/Tabs",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>a.jsxs(r,{defaultValue:"account",className:"w-[400px]",children:[a.jsxs(u,{children:[a.jsx(e,{value:"account",children:"Account"}),a.jsx(e,{value:"password",children:"Password"})]}),a.jsx(s,{value:"account",children:a.jsxs("div",{className:"p-4",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Account"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Make changes to your account here."})]})}),a.jsx(s,{value:"password",children:a.jsxs("div",{className:"p-4",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Password"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password here."})]})})]})},n={render:()=>a.jsxs(r,{defaultValue:"tab1",className:"w-[400px]",children:[a.jsxs(u,{children:[a.jsx(e,{value:"tab1",children:"Tab 1"}),a.jsx(e,{value:"tab2",children:"Tab 2"}),a.jsx(e,{value:"tab3",children:"Tab 3"})]}),a.jsx(s,{value:"tab1",children:a.jsx("div",{className:"p-4",children:"Content for Tab 1"})}),a.jsx(s,{value:"tab2",children:a.jsx("div",{className:"p-4",children:"Content for Tab 2"})}),a.jsx(s,{value:"tab3",children:a.jsx("div",{className:"p-4",children:"Content for Tab 3"})})]})};var o,c,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Account</h3>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Password</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,i,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">Content for Tab 1</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">Content for Tab 2</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">Content for Tab 3</div>
      </TabsContent>
    </Tabs>
}`,...(b=(i=n.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};const C=["Default","ThreeTabs"];export{t as Default,n as ThreeTabs,C as __namedExportsOrder,N as default};
