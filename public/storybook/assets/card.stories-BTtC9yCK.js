import{j as r}from"./jsx-runtime-CDt2p4po.js";import{C as e,a,b as s,c as n,d,e as N}from"./card-CGUjogcp.js";import{B as b}from"./button-B3zYDy4A.js";import"./index-GiUgBvb1.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./index-DBCqBOGF.js";const _={title:"Components/Card",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","glass","gradient","glow","elevated"]}}},t={render:()=>r.jsxs(e,{className:"w-[350px]",children:[r.jsxs(a,{children:[r.jsx(s,{children:"Card Title"}),r.jsx(n,{children:"Card description goes here"})]}),r.jsx(d,{children:r.jsx("p",{children:"This is the card content area."})}),r.jsx(N,{children:r.jsx(b,{children:"Action"})})]})},i={render:()=>r.jsxs(e,{variant:"glass",className:"w-[350px]",children:[r.jsxs(a,{children:[r.jsx(s,{children:"Glass Card"}),r.jsx(n,{children:"Beautiful glassmorphism effect"})]}),r.jsx(d,{children:r.jsx("p",{children:"This card has a glass effect with backdrop blur."})})]})},o={render:()=>r.jsxs(e,{variant:"gradient",className:"w-[350px]",children:[r.jsxs(a,{children:[r.jsx(s,{children:"Gradient Card"}),r.jsx(n,{children:"Beautiful gradient background"})]}),r.jsx(d,{children:r.jsx("p",{children:"This card features a stunning gradient effect."})})]})},c={render:()=>r.jsxs(e,{variant:"glow",className:"w-[350px]",children:[r.jsxs(a,{children:[r.jsx(s,{children:"Glow Card"}),r.jsx(n,{children:"Card with glow effect"})]}),r.jsx(d,{children:r.jsx("p",{children:"This card has a glowing border effect."})})]})},l={render:()=>r.jsxs(e,{variant:"elevated",className:"w-[350px]",children:[r.jsxs(a,{children:[r.jsx(s,{children:"Elevated Card"}),r.jsx(n,{children:"Card that lifts on hover"})]}),r.jsx(d,{children:r.jsx("p",{children:"Hover over this card to see it lift up!"})})]})};var C,p,h;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,x,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Card variant="glass" className="w-[350px]">
      <CardHeader>
        <CardTitle>Glass Card</CardTitle>
        <CardDescription>Beautiful glassmorphism effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has a glass effect with backdrop blur.</p>
      </CardContent>
    </Card>
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var f,g,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card variant="gradient" className="w-[350px]">
      <CardHeader>
        <CardTitle>Gradient Card</CardTitle>
        <CardDescription>Beautiful gradient background</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card features a stunning gradient effect.</p>
      </CardContent>
    </Card>
}`,...(j=(g=o.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var w,v,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Card variant="glow" className="w-[350px]">
      <CardHeader>
        <CardTitle>Glow Card</CardTitle>
        <CardDescription>Card with glow effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has a glowing border effect.</p>
      </CardContent>
    </Card>
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var D,H,G;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Card variant="elevated" className="w-[350px]">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>Card that lifts on hover</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hover over this card to see it lift up!</p>
      </CardContent>
    </Card>
}`,...(G=(H=l.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};const O=["Default","Glass","Gradient","Glow","Elevated"];export{t as Default,l as Elevated,i as Glass,c as Glow,o as Gradient,O as __namedExportsOrder,_ as default};
