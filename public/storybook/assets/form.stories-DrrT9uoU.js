import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as i}from"./index-GiUgBvb1.js";import"./index-C8NrMXaH.js";import{c as B,B as F}from"./button-B3zYDy4A.js";import{c as D}from"./index-BwobEAja.js";import{c as u}from"./utils-CytzSlOG.js";import{I as o}from"./input-CiaAd3f-.js";import"./index-DBCqBOGF.js";var G=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],L=G.reduce((r,a)=>{const s=B(`Primitive.${a}`),n=i.forwardRef((l,x)=>{const{asChild:f,..._}=l,P=f?s:a;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(P,{..._,ref:x})});return n.displayName=`Primitive.${a}`,{...r,[a]:n}},{}),T="Label",S=i.forwardRef((r,a)=>e.jsx(L.label,{...r,ref:a,onMouseDown:s=>{var l;s.target.closest("button, input, select, textarea")||((l=r.onMouseDown)==null||l.call(r,s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));S.displayName=T;var R=S;const W=D("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),h=i.forwardRef(({className:r,...a},s)=>e.jsx(R,{ref:s,className:u(W(),r),...a}));h.displayName=R.displayName;h.__docgenInfo={description:"",methods:[]};const m=i.forwardRef(({className:r,...a},s)=>e.jsx("form",{ref:s,className:u("space-y-4",r),...a}));m.displayName="Form";const t=i.forwardRef(({label:r,error:a,required:s,children:n,className:l,...x},f)=>e.jsxs("div",{ref:f,className:u("space-y-2",l),...x,children:[r&&e.jsxs(h,{children:[r,s&&e.jsx("span",{className:"text-destructive ml-1",children:"*"})]}),n,a&&e.jsx("p",{className:"text-sm text-destructive font-medium",children:a})]}));t.displayName="FormField";const b=i.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:u("flex flex-col sm:flex-row gap-4",r),...a}));b.displayName="FormGroup";m.__docgenInfo={description:"",methods:[],displayName:"Form"};t.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"FormGroup"};const z={title:"Components/Form",component:m,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>e.jsxs(m,{className:"w-[400px]",children:[e.jsx(t,{label:"Email",required:!0,children:e.jsx(o,{type:"email",placeholder:"email@example.com"})}),e.jsx(t,{label:"Password",required:!0,children:e.jsx(o,{type:"password",placeholder:"Enter password"})}),e.jsx(F,{type:"submit",className:"w-full",children:"Submit"})]})},c={render:()=>e.jsxs(m,{className:"w-[400px]",children:[e.jsx(t,{label:"Email",required:!0,error:"Email is required",children:e.jsx(o,{type:"email"})}),e.jsx(t,{label:"Password",required:!0,children:e.jsx(o,{type:"password"})}),e.jsx(F,{type:"submit",className:"w-full",children:"Submit"})]})},p={render:()=>e.jsxs(m,{className:"w-[400px]",children:[e.jsxs(b,{children:[e.jsx(t,{label:"First Name",required:!0,children:e.jsx(o,{placeholder:"John"})}),e.jsx(t,{label:"Last Name",required:!0,children:e.jsx(o,{placeholder:"Doe"})})]}),e.jsx(t,{label:"Email",required:!0,children:e.jsx(o,{type:"email",placeholder:"email@example.com"})}),e.jsx(F,{type:"submit",className:"w-full",children:"Submit"})]})};var N,w,y;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Form className="w-[400px]">
      <FormField label="Email" required>
        <Input type="email" placeholder="email@example.com" />
      </FormField>
      <FormField label="Password" required>
        <Input type="password" placeholder="Enter password" />
      </FormField>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </Form>
}`,...(y=(w=d.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,q,g;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Form className="w-[400px]">
      <FormField label="Email" required error="Email is required">
        <Input type="email" />
      </FormField>
      <FormField label="Password" required>
        <Input type="password" />
      </FormField>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </Form>
}`,...(g=(q=c.parameters)==null?void 0:q.docs)==null?void 0:g.source}}};var E,v,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Form className="w-[400px]">
      <FormGroup>
        <FormField label="First Name" required>
          <Input placeholder="John" />
        </FormField>
        <FormField label="Last Name" required>
          <Input placeholder="Doe" />
        </FormField>
      </FormGroup>
      <FormField label="Email" required>
        <Input type="email" placeholder="email@example.com" />
      </FormField>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </Form>
}`,...(I=(v=p.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const H=["Default","WithError","WithGroup"];export{d as Default,c as WithError,p as WithGroup,H as __namedExportsOrder,z as default};
