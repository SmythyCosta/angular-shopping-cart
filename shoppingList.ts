export default class shoppingList {

    loaded : boolean = true
    products : product[];
    private subscription : Subscription;

    constructor(private _cartService : cartService) {}

    ngOnInit() {
        
        // this.loaderService.show();
        this.subscription = this._cartService.CartState
            .subscribe((state : CartState) => {
                this.products = state.products;
                console.log(this.products);
            });

    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}