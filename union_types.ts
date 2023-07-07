let my_union_var: number | string;

my_union_var = 10;
my_union_var = "testing";
// my_union_var = true; // error TS2322: Type 'boolean' is not assignable to type 'string | number'.

let my_intersection_var: number & string;