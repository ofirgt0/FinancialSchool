using FinancialSchool.Interfaces;
using FinancialSchool.Interfaces.Repositories;
using FinancialSchool.Models.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialSchool.Repository
{
    public class ProductsRepository : IProductsRepository
    {
        private readonly IProductsSqlProvider _productsSqlProvider;
        private readonly IClassesRepository _classesRepository;
        private readonly IHistoryRepository _historyRepository;

        public ProductsRepository(IProductsSqlProvider productsSqlProvider, IHistoryRepository historyRepository, IClassesRepository classesRepository)
        {                                                                   
            _productsSqlProvider = productsSqlProvider;
            _classesRepository = classesRepository;
            _historyRepository = historyRepository;
        }

        public Task<bool> DeleteProductByIdAsync(int ProductId)
        {
            return _productsSqlProvider.DeleteProductByIdAsync(ProductId);
        }

        public Task<IList<Product>> GetAllProductsAsync()
        {
            return _productsSqlProvider.GetAllProductsAsync();
        }

        public Task<Product> GetProductByIdAsync(int ProductId)
        {
            return _productsSqlProvider.GetProductByIdAsync(ProductId);
        }

        public Task<bool> InsertProductAsync(Product newProduct)
        {
            return _productsSqlProvider.InsertProductAsync(newProduct);
        }

        public async Task<bool> BuyProductAsync(int ProductId, string classId)
        {
            try
            {
                var product = await _productsSqlProvider.GetProductByIdAsync(ProductId);
                await _classesRepository.ChangeClassCashByDifferenceAsync(classId, product.Price);
                var historyLine = new History
                {
                    ClassId = classId,
                    Date = DateTime.Now.ToString(),
                    Id = int.Parse(DateTime.Now.ToString("MMddHHmmss")),
                    ProductId = ProductId,
                    TransactionPrice = product.Price
                };
                await _historyRepository.InsertHistoryAsync(historyLine);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}