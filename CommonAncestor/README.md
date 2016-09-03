Implement the function 

getClosestCommonAncestor and 

getAncestorPath in the Tree class

// Valid Child
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

grandma.getAncestorPath(me); // =&gt; [grandma, mom, me]
mom.getAncestorPath(me)  // =&gt; [mom, me]
me.getAncestorPath(me) // =&gt; [me]
grandma.getClosestCommonAncestor(me, uncle); // =&gt; grandma

// Invalid Child
grandma.getAncestorPath(H R Giger) // =&gt; null
