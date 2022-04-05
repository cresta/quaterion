Search.setIndex({docnames:["index","quaterion","quaterion.dataset","quaterion.dataset.similarity_data_loader","quaterion.dataset.similarity_dataset","quaterion.dataset.similarity_samples","quaterion.dataset.train_collater","quaterion.distances","quaterion.distances.base_distance","quaterion.distances.cosine","quaterion.distances.dot_product","quaterion.distances.euclidean","quaterion.distances.manhattan","quaterion.eval","quaterion.eval.base_metric","quaterion.eval.group","quaterion.eval.group.group_metric","quaterion.eval.group.retrieval_r_precision","quaterion.eval.pair","quaterion.eval.pair.pair_metric","quaterion.eval.pair.retrieval_precision","quaterion.eval.pair.retrieval_reciprocal_rank","quaterion.loss","quaterion.loss.arcface_loss","quaterion.loss.contrastive_loss","quaterion.loss.extras","quaterion.loss.extras.pytorch_metric_learning_wrapper","quaterion.loss.group_loss","quaterion.loss.metrics","quaterion.loss.multiple_negatives_ranking_loss","quaterion.loss.online_contrastive_loss","quaterion.loss.pairwise_loss","quaterion.loss.similarity_loss","quaterion.loss.softmax_loss","quaterion.loss.triplet_loss","quaterion.main","quaterion.train","quaterion.train.cache","quaterion.train.cache.cache_config","quaterion.train.trainable_model","quaterion.utils","quaterion.utils.enums","quaterion.utils.utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","quaterion.rst","quaterion.dataset.rst","quaterion.dataset.similarity_data_loader.rst","quaterion.dataset.similarity_dataset.rst","quaterion.dataset.similarity_samples.rst","quaterion.dataset.train_collater.rst","quaterion.distances.rst","quaterion.distances.base_distance.rst","quaterion.distances.cosine.rst","quaterion.distances.dot_product.rst","quaterion.distances.euclidean.rst","quaterion.distances.manhattan.rst","quaterion.eval.rst","quaterion.eval.base_metric.rst","quaterion.eval.group.rst","quaterion.eval.group.group_metric.rst","quaterion.eval.group.retrieval_r_precision.rst","quaterion.eval.pair.rst","quaterion.eval.pair.pair_metric.rst","quaterion.eval.pair.retrieval_precision.rst","quaterion.eval.pair.retrieval_reciprocal_rank.rst","quaterion.loss.rst","quaterion.loss.arcface_loss.rst","quaterion.loss.contrastive_loss.rst","quaterion.loss.extras.rst","quaterion.loss.extras.pytorch_metric_learning_wrapper.rst","quaterion.loss.group_loss.rst","quaterion.loss.metrics.rst","quaterion.loss.multiple_negatives_ranking_loss.rst","quaterion.loss.online_contrastive_loss.rst","quaterion.loss.pairwise_loss.rst","quaterion.loss.similarity_loss.rst","quaterion.loss.softmax_loss.rst","quaterion.loss.triplet_loss.rst","quaterion.main.rst","quaterion.train.rst","quaterion.train.cache.rst","quaterion.train.cache.cache_config.rst","quaterion.train.trainable_model.rst","quaterion.utils.rst","quaterion.utils.enums.rst","quaterion.utils.utils.rst"],objects:{"":[[1,0,0,"-","quaterion"]],"quaterion.dataset":[[3,0,0,"-","similarity_data_loader"],[4,0,0,"-","similarity_dataset"],[5,0,0,"-","similarity_samples"],[6,0,0,"-","train_collater"]],"quaterion.dataset.similarity_data_loader":[[3,1,1,"","GroupSimilarityDataLoader"],[3,1,1,"","PairsSimilarityDataLoader"],[3,1,1,"","SimilarityDataLoader"]],"quaterion.dataset.similarity_data_loader.GroupSimilarityDataLoader":[[3,2,1,"","batch_size"],[3,3,1,"","collate_labels"],[3,2,1,"","dataset"],[3,2,1,"","drop_last"],[3,3,1,"","flatten_objects"],[3,2,1,"","num_workers"],[3,2,1,"","pin_memory"],[3,2,1,"","prefetch_factor"],[3,2,1,"","sampler"],[3,2,1,"","timeout"]],"quaterion.dataset.similarity_data_loader.PairsSimilarityDataLoader":[[3,2,1,"","batch_size"],[3,3,1,"","collate_labels"],[3,2,1,"","dataset"],[3,2,1,"","drop_last"],[3,3,1,"","flatten_objects"],[3,2,1,"","num_workers"],[3,2,1,"","pin_memory"],[3,2,1,"","prefetch_factor"],[3,2,1,"","sampler"],[3,2,1,"","timeout"]],"quaterion.dataset.similarity_data_loader.SimilarityDataLoader":[[3,2,1,"","batch_size"],[3,3,1,"","collate_labels"],[3,2,1,"","dataset"],[3,2,1,"","drop_last"],[3,3,1,"","flatten_objects"],[3,2,1,"","num_workers"],[3,4,1,"","original_params"],[3,2,1,"","pin_memory"],[3,3,1,"","pre_collate_fn"],[3,2,1,"","prefetch_factor"],[3,2,1,"","sampler"],[3,2,1,"","timeout"]],"quaterion.dataset.similarity_dataset":[[4,1,1,"","SimilarityGroupDataset"]],"quaterion.dataset.similarity_samples":[[5,1,1,"","SimilarityGroupSample"],[5,1,1,"","SimilarityPairSample"]],"quaterion.dataset.similarity_samples.SimilarityGroupSample":[[5,2,1,"","group"],[5,2,1,"","obj"]],"quaterion.dataset.similarity_samples.SimilarityPairSample":[[5,2,1,"","obj_a"],[5,2,1,"","obj_b"],[5,2,1,"","score"],[5,2,1,"","subgroup"]],"quaterion.dataset.train_collater":[[6,1,1,"","TrainCollater"]],"quaterion.dataset.train_collater.TrainCollater":[[6,3,1,"","pre_encoder_collate"]],"quaterion.distances":[[7,1,1,"","Distance"],[8,0,0,"-","base_distance"],[9,0,0,"-","cosine"],[10,0,0,"-","dot_product"],[11,0,0,"-","euclidean"],[12,0,0,"-","manhattan"]],"quaterion.distances.Distance":[[7,2,1,"","COSINE"],[7,2,1,"","DOT_PRODUCT"],[7,2,1,"","EUCLIDEAN"],[7,2,1,"","MANHATTAN"],[7,3,1,"","get_by_name"]],"quaterion.distances.base_distance":[[8,1,1,"","BaseDistance"]],"quaterion.distances.base_distance.BaseDistance":[[8,3,1,"","distance"],[8,3,1,"","distance_matrix"],[8,3,1,"","similarity"],[8,3,1,"","similarity_matrix"]],"quaterion.distances.cosine":[[9,1,1,"","Cosine"]],"quaterion.distances.cosine.Cosine":[[9,3,1,"","distance"],[9,3,1,"","distance_matrix"],[9,3,1,"","similarity"],[9,3,1,"","similarity_matrix"]],"quaterion.distances.dot_product":[[10,1,1,"","DotProduct"]],"quaterion.distances.dot_product.DotProduct":[[10,3,1,"","distance"],[10,3,1,"","distance_matrix"],[10,3,1,"","similarity"],[10,3,1,"","similarity_matrix"]],"quaterion.distances.euclidean":[[11,1,1,"","Euclidean"]],"quaterion.distances.euclidean.Euclidean":[[11,3,1,"","distance"],[11,3,1,"","distance_matrix"],[11,3,1,"","similarity"],[11,3,1,"","similarity_matrix"]],"quaterion.distances.manhattan":[[12,1,1,"","Manhattan"]],"quaterion.distances.manhattan.Manhattan":[[12,3,1,"","distance"],[12,3,1,"","distance_matrix"],[12,3,1,"","similarity"],[12,3,1,"","similarity_matrix"]],"quaterion.eval":[[14,0,0,"-","base_metric"],[15,0,0,"-","group"],[18,0,0,"-","pair"]],"quaterion.eval.base_metric":[[14,1,1,"","BaseMetric"]],"quaterion.eval.base_metric.BaseMetric":[[14,3,1,"","calculate_distances"],[14,3,1,"","calculate_similarities"],[14,3,1,"","compute"],[14,3,1,"","reset"]],"quaterion.eval.group":[[16,0,0,"-","group_metric"],[17,0,0,"-","retrieval_r_precision"]],"quaterion.eval.group.group_metric":[[16,1,1,"","GroupMetric"]],"quaterion.eval.group.group_metric.GroupMetric":[[16,3,1,"","compute"],[16,3,1,"","reset"],[16,3,1,"","update"]],"quaterion.eval.group.retrieval_r_precision":[[17,1,1,"","RetrievalRPrecision"],[17,5,1,"","retrieval_r_precision"]],"quaterion.eval.group.retrieval_r_precision.RetrievalRPrecision":[[17,3,1,"","compute"]],"quaterion.eval.pair":[[19,0,0,"-","pair_metric"],[20,0,0,"-","retrieval_precision"],[21,0,0,"-","retrieval_reciprocal_rank"]],"quaterion.eval.pair.pair_metric":[[19,1,1,"","PairMetric"]],"quaterion.eval.pair.pair_metric.PairMetric":[[19,3,1,"","compute"],[19,3,1,"","precompute"],[19,3,1,"","reset"],[19,3,1,"","update"]],"quaterion.eval.pair.retrieval_precision":[[20,1,1,"","RetrievalPrecision"],[20,5,1,"","retrieval_precision"]],"quaterion.eval.pair.retrieval_precision.RetrievalPrecision":[[20,3,1,"","compute"]],"quaterion.eval.pair.retrieval_reciprocal_rank":[[21,1,1,"","RetrievalReciprocalRank"],[21,5,1,"","retrieval_reciprocal_rank"]],"quaterion.eval.pair.retrieval_reciprocal_rank.RetrievalReciprocalRank":[[21,3,1,"","compute"]],"quaterion.loss":[[23,0,0,"-","arcface_loss"],[24,0,0,"-","contrastive_loss"],[25,0,0,"-","extras"],[27,0,0,"-","group_loss"],[29,0,0,"-","multiple_negatives_ranking_loss"],[30,0,0,"-","online_contrastive_loss"],[31,0,0,"-","pairwise_loss"],[32,0,0,"-","similarity_loss"],[33,0,0,"-","softmax_loss"],[34,0,0,"-","triplet_loss"]],"quaterion.loss.arcface_loss":[[23,1,1,"","ArcFaceLoss"],[23,5,1,"","l2_norm"]],"quaterion.loss.arcface_loss.ArcFaceLoss":[[23,3,1,"","forward"],[23,2,1,"","training"]],"quaterion.loss.contrastive_loss":[[24,1,1,"","ContrastiveLoss"]],"quaterion.loss.contrastive_loss.ContrastiveLoss":[[24,3,1,"","forward"],[24,3,1,"","get_config_dict"],[24,2,1,"","training"]],"quaterion.loss.extras":[[26,0,0,"-","pytorch_metric_learning_wrapper"]],"quaterion.loss.extras.pytorch_metric_learning_wrapper":[[26,1,1,"","PytorchMetricLearningWrapper"]],"quaterion.loss.extras.pytorch_metric_learning_wrapper.PytorchMetricLearningWrapper":[[26,3,1,"","forward"],[26,2,1,"","training"]],"quaterion.loss.group_loss":[[27,1,1,"","GroupLoss"]],"quaterion.loss.group_loss.GroupLoss":[[27,3,1,"","forward"],[27,2,1,"","training"]],"quaterion.loss.multiple_negatives_ranking_loss":[[29,1,1,"","MultipleNegativesRankingLoss"]],"quaterion.loss.multiple_negatives_ranking_loss.MultipleNegativesRankingLoss":[[29,3,1,"","forward"],[29,3,1,"","get_config_dict"],[29,2,1,"","training"]],"quaterion.loss.online_contrastive_loss":[[30,1,1,"","OnlineContrastiveLoss"]],"quaterion.loss.online_contrastive_loss.OnlineContrastiveLoss":[[30,3,1,"","forward"],[30,3,1,"","get_config_dict"],[30,2,1,"","training"]],"quaterion.loss.pairwise_loss":[[31,1,1,"","PairwiseLoss"]],"quaterion.loss.pairwise_loss.PairwiseLoss":[[31,3,1,"","forward"],[31,2,1,"","training"]],"quaterion.loss.similarity_loss":[[32,1,1,"","SimilarityLoss"]],"quaterion.loss.similarity_loss.SimilarityLoss":[[32,3,1,"","get_config_dict"],[32,2,1,"","training"]],"quaterion.loss.softmax_loss":[[33,1,1,"","SoftmaxLoss"]],"quaterion.loss.softmax_loss.SoftmaxLoss":[[33,3,1,"","forward"],[33,2,1,"","training"]],"quaterion.loss.triplet_loss":[[34,1,1,"","TripletLoss"]],"quaterion.loss.triplet_loss.TripletLoss":[[34,3,1,"","forward"],[34,3,1,"","get_config_dict"],[34,2,1,"","training"]],"quaterion.main":[[35,1,1,"","Quaterion"]],"quaterion.main.Quaterion":[[35,3,1,"","fit"]],"quaterion.train":[[37,0,0,"-","cache"],[39,0,0,"-","trainable_model"]],"quaterion.train.cache":[[37,1,1,"","CacheConfig"],[37,1,1,"","CacheType"],[38,0,0,"-","cache_config"]],"quaterion.train.cache.CacheConfig":[[37,2,1,"","batch_size"],[37,2,1,"","cache_type"],[37,2,1,"","key_extractors"],[37,2,1,"","mapping"],[37,2,1,"","num_workers"]],"quaterion.train.cache.CacheType":[[37,2,1,"","AUTO"],[37,2,1,"","CPU"],[37,2,1,"","GPU"]],"quaterion.train.cache.cache_config":[[38,1,1,"","CacheConfig"],[38,1,1,"","CacheType"],[38,6,1,"","KeyExtractorType"]],"quaterion.train.cache.cache_config.CacheConfig":[[38,2,1,"","batch_size"],[38,2,1,"","cache_type"],[38,2,1,"","key_extractors"],[38,2,1,"","mapping"],[38,2,1,"","num_workers"]],"quaterion.train.cache.cache_config.CacheType":[[38,2,1,"","AUTO"],[38,2,1,"","CPU"],[38,2,1,"","GPU"]],"quaterion.train.trainable_model":[[39,1,1,"","TrainableModel"]],"quaterion.train.trainable_model.TrainableModel":[[39,3,1,"","cache"],[39,3,1,"","configure_caches"],[39,3,1,"","configure_encoders"],[39,3,1,"","configure_head"],[39,3,1,"","configure_loss"],[39,4,1,"","loss"],[39,4,1,"","model"],[39,3,1,"","process_results"],[39,3,1,"","save_servable"],[39,3,1,"","setup_dataloader"],[39,3,1,"","test_step"],[39,2,1,"","training"],[39,3,1,"","training_step"],[39,3,1,"","unwrap_cache"],[39,3,1,"","validation_step"]],"quaterion.utils":[[41,0,0,"-","enums"],[42,0,0,"-","utils"]],"quaterion.utils.enums":[[41,1,1,"","TrainStage"]],"quaterion.utils.enums.TrainStage":[[41,2,1,"","TEST"],[41,2,1,"","TRAIN"],[41,2,1,"","VALIDATION"]],"quaterion.utils.utils":[[42,5,1,"","get_anchor_negative_mask"],[42,5,1,"","get_anchor_positive_mask"],[42,5,1,"","get_triplet_mask"],[42,5,1,"","info_value_of_dtype"],[42,5,1,"","max_value_of_dtype"],[42,5,1,"","min_value_of_dtype"]],quaterion:[[2,0,0,"-","dataset"],[7,0,0,"-","distances"],[13,0,0,"-","eval"],[22,0,0,"-","loss"],[35,0,0,"-","main"],[36,0,0,"-","train"],[40,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","function","Python function"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:property","5":"py:function","6":"py:data"},terms:{"0":[3,5,9,11,12,17,20,21,23,24,29,30,33,34],"00652":29,"03832":34,"05":33,"06":[24,30],"07698":23,"0x7f060513a3d0":[],"0x7f189dc9c040":[],"0x7f3b18e685b0":[],"0x7f3b516f15b0":[],"0x7f4b8b5668b0":[],"0x7ff39f6277f0":6,"1":[3,5,9,11,12,20,21,24,29,34],"10":[5,21],"11":5,"15":17,"1503":34,"1705":29,"1801":23,"1st_pair_1st_obj":3,"1st_pair_2nd_obj":3,"2":[3,5,20,21,31],"20":[17,29],"209":5,"2d":42,"2nd_pair_1st_obj":3,"2nd_pair_2nd_obj":3,"3":[3,5,21,42],"32":[37,38],"3d":42,"4":[5,20],"5":[20,21,23,24,30,34],"555":5,"64":23,"7":5,"75":17,"8":5,"9":[5,21],"case":5,"class":[3,4,5,6,7,8,9,10,11,12,14,16,17,19,20,21,23,24,26,27,29,30,31,32,33,34,35,37,38,39,41],"default":[6,14,16,19,24,29,30,33,34,39],"do":39,"enum":[1,7,37,38,40],"float":[3,5,23,24,29,30,33,34,42],"function":[3,6,10,24,27,29,30,31,32,34,37,38,39,42],"int":[3,5,6,23,33,37,38,39,42],"new":3,"return":[3,4,8,9,10,11,12,14,16,17,19,20,21,23,24,26,27,29,30,31,32,33,34,39,42],"static":[7,8,9,10,11,12],"true":[24,29],A:[7,35],For:29,If:[8,9,10,11,12,20,24,29],In:5,It:[29,33,34,37,38],One:[30,34],The:[9,11],Then:[20,21,29],__init__:3,ab:[23,34],abl:26,about:[26,29,42],abov:42,accept:29,account:29,accumul:[14,16,19],across:7,actual:[3,42],ad:39,addit:[3,23,24,29,39],addition:3,affect:[37,38],aggreg:6,albani:11,alia:38,all:[5,6,8,9,10,11,12,30,34,39,42],allow:[6,42],also:29,alwai:20,among:[6,19,20],amount:20,an:[7,19,26,29,33,39],anchor:[29,42],angular:23,ani:[3,5,6,8,24,29,30,32,34,38,39],anoth:5,answer:29,apart:[23,30,34],appl:3,appli:[3,23,39],ar:[3,6,10,20,21,24,29,30,42],arcface_loss:[1,22],arcfaceloss:23,arg:39,argument:[3,7,24,29,39],arxiv:[23,29,34],assembl:35,assign:[3,8,9,10,11,12,39],associ:[3,23,26,27,30,33,34,39,42],assum:[20,21,29],attribut:[],auto:[37,38,39],automat:[3,29,39],avail:[14,16,17,19,20,21,37,38],averag:24,bar:39,base:[3,4,5,6,7,8,9,10,11,12,14,16,17,19,20,21,23,24,26,27,29,30,31,32,33,34,35,37,38,39,41,42],base_dist:[1,7],base_metr:[1,13],basedist:[7,8,9,10,11,12],basemetr:[14,16,19,26],basemetriclossfunct:26,basemin:26,batch:[3,6,16,24,29,30,31,34,37,38,39,42],batch_idx:39,batch_siz:[3,8,9,10,11,12,23,26,27,30,31,33,34,37,38,39,42],becaus:10,befor:[3,39],being:[20,21],below:26,between:[8,9,10,11,12,24,29,39],book:[11,12],bool:[3,23,24,26,27,29,30,31,32,33,34,39,42],cach:[1,35,36,39],cachabl:39,cache_config:[36,37],cache_typ:[37,38,39],cacheabl:[37,38],cacheconfig:[37,38,39],cachedataload:[37,38],cachemixin:39,cachetyp:[37,38,39],calcul:[8,9,10,11,12,14,16,17,19,20,21,29,30,34,39,42],calculate_dist:14,calculate_similar:14,call:[24,29],callabl:[6,38],can:[7,17,24,42],candi:5,cannot:24,chang:26,checkpoint:39,cheesecak:5,choic:[],chopra:[24,30],chosen:10,cl:[],classif:4,classmethod:[3,35],closer:5,collat:[3,6,39],collate_fn:3,collate_label:3,collect:[11,12,17],com:[24,30],combin:10,common:[],commonli:6,compat:4,complet:[],comput:[9,10,11,12,14,16,17,19,20,21,23,24,29,31,33,39],config:[24,29,30,32,34],configur:39,configure_cach:[37,38,39],configure_encod:39,configure_head:39,configure_loss:[26,39],constructor:26,consum:3,contain:[17,31],contrast:[24,30],contrastive_loss:[1,22],contrastiveloss:[24,30],convert:[3,4],correct:29,correspond:[19,24,29],cosin:[1,7,14,16,17,19,20,21,24,27,29,30,31,32,34],cosine_dist:[],could:[14,16,17,19,20,21],cpu:[16,19,37,38,39],creat:[19,26,42],criteria:42,cross:[23,29,33],cube:42,cuda:[37,38],current:[],data:[3,4,5,17,19,35,39,42],dataload:[3,35,39],dataset:[1,20,21,23,33,39],debug:3,def:26,default_encoder_kei:39,defin:[3,23,30,34,39],deprec:26,describ:29,design:33,determin:19,devic:[16,19,37,38],diagon:[17,20,21],dict:[3,6,24,29,30,32,34,37,38,39],differ:[5,19],dim:23,dimens:[23,33],directli:3,disambigu:39,displai:39,dissimilar:16,distanc:[1,14,16,17,19,20,21,24,27,29,30,31,32,34],distance_matrix:[8,9,10,11,12,17,20,21],distance_metr:[],distance_metric_nam:[14,16,17,19,20,21,24,27,29,30,31,32,34],distinct:42,distinguish:[6,16,24,38],divid:33,document:[17,20,21,26],doe:[37,38,42],don:[29,30],dot:[10,33],dot_product:[1,7,29],dot_product_dist:[],dotproduct:10,drop_last:3,dtype:42,dummi:3,duplic:29,dure:[35,37,38,39],dwarf:35,e:[8,9,10,11,12,24,27,29,30,31,32,34,39,42],each:[3,5,20,21,29,39],effect:10,either:24,element:6,elon_musk_1:5,elon_musk_2:5,elon_musk_3:5,els:[37,38],embed:[16,19,23,24,26,27,29,30,31,33,34,39,42],embedding_dim:[8,9,10,11,12,30,34],embedding_s:[23,33,39],encod:[3,6,23,33,37,38,39],encoder_col:6,encoder_nam:[6,37,38],encoderhead:39,entir:10,entropi:[23,29,33],enumer:[3,7],especi:[],estim:3,euclidean:[1,7],eval:1,evalu:[14,39],exactli:10,exampl:[3,5,17,20,21,24,26,29,30,34,39],exdb:[24,30],expect:24,experiment:26,explain:11,extra:[1,22],extract:38,extractor:[37,38],face:5,factori:[37,38],fals:[17,20,21,29],farther:35,favor:[],featir:3,featur:[3,6,26],file_nam:5,fill:39,filter:30,find:19,finfo:42,first:[5,21,24,29,30],fit:35,flat:[],flatten_object:3,fly:30,form:[29,30,42],format:4,forward:[23,24,26,27,29,30,31,33,34],found:[14,16,17,19,20,21],from:[3,5,7,19,23,26,29,33,38,39],function_nam:[],further:[5,24],g:[24,27,29,30,31,32,34,39],gener:[3,24,29],get:[7,39],get_anchor_negative_mask:42,get_anchor_positive_mask:42,get_by_nam:7,get_collate_fn:3,get_config_dict:[24,29,30,32,34],get_distance_funct:[],get_triplet_mask:42,giant:35,given:[17,20,21,29,42],gpu:[37,38,39],great:29,greater:20,group:[1,3,5,13,23,26,27,30,33,34],group_id:5,group_loss:[1,22],group_metr:[13,15],grouploss:[23,26,27,30,33,34],groupmetr:[16,17],groupsimilaritydataload:[3,4],ha:[24,29,30,32,34],hadsel:[24,30],half:[24,29],handl:[35,41],hard:[30,34],hash:[38,39],hash_id:3,hashabl:[37,38],have:[5,10,17,20,21,24],head:39,higher:[8,9,10,11,12],highest:17,how:10,howev:42,http:[23,24,29,30,34],i:[8,9,10,11,12,29,30,42],id:[3,5,6,23,31,33,39],ignor:29,iinfo:42,image_encod:39,implement:[6,8,14,16,19,29,30,33,34],increas:24,independ:39,index:[0,39],indic:[19,24,29,42],individu:[3,26,39],info:42,info_value_of_dtyp:42,inform:[6,24],initi:[3,39],input:[3,6,23,24,38],input_embedding_s:39,inspect:6,instanc:[26,35,39],instead:30,integ:39,intellig:[11,12],interact:19,intern:35,interpret:[9,10,11,12],item:39,iter:3,its:[6,7,9,10,11,12],itself:[],j:42,jpg:5,json:[24,29,30,32,34],k:[20,21,42],keep:6,kei:[24,29,37,38,39],key_extractor:[37,38,39],keyextractortyp:[37,38],keyword:39,kind:39,known:31,kwarg:[3,24,29,39],l2:23,l2_norm:23,label:[3,4,6,17,19,20,21,24,29,30,31,34,42],labels_batch:3,layer:39,learn:[5,26],least:24,lecun:[24,30],lemon:[3,5],leonard_nimoy_1:5,leonard_nimoy_2:5,lightn:39,lightningmodul:39,likelihood:29,lime:5,list:[3,6,31],load:[24,29,30,32,34,39],loader:[35,39],log:29,logger:39,logit:33,longtensor:[16,19,24,27,29,30,33,34],loss:[1,3,10,39],lower:[8,9,10,11,12],macaroon:5,mai:[10,26],main:1,make:[10,23,29,30],manhattan:[1,7],map:[6,37,38,39],margin:[23,24,30,34],mask:42,match:[5,19],matric:[14,16,17,19,20,21],matrix:[8,9,10,11,12,14,17,19,20,21,29],max:[17,20,21,42],max_value_of_dtyp:42,maximum:42,mean:[6,17],method:[7,39],metric:[3,7,8,9,14,16,17,19,20,21,26,29,39],metric_class:[],metricmodel:39,might:[6,39],min:42,min_value_of_dtyp:42,mine:[30,34],miner:26,mini:24,minim:29,minimum:42,modal:29,model:[17,35,39],modul:0,more:[3,8,9,10,11,12,26,39],muffin:5,multipl:29,multiple_negatives_ranking_loss:[1,22],multiplenegativesrankingloss:29,multipli:29,multisimilaritymin:26,must:29,mytrainablemodel:26,name:[6,7,14,16,17,19,20,21,24,27,29,30,31,32,34,39],need:[26,29,30],neg:[6,10,24,29,30,34,42],nn:5,non:[37,38,39],none:[6,8,9,10,11,12,16,19,26,35,37,38,39],normal:[23,29],num:[37,38],num_group:[23,33],num_work:[3,37,38],number:[17,20,23,33,39,42],obj:[3,5],obj_a:[3,5,29],obj_b:[3,5,29],object:[3,5,6,8,14,16,19,24,26,29,30,31,32,34,35,37,38,39,42],offset:3,onc:3,one:[3,5,20,30],ones:42,onli:[3,20,29],onlin:[30,34],online_contrastive_loss:[1,22],onlinecontrastiveloss:30,oper:23,optim:29,option:[3,6,8,9,10,11,12,24,26,29,30,34,35,37,38,39],orang:[3,5],org:[23,29,34],origin:[3,6,39],original_param:3,other:[5,29,37,38],otherwis:39,our:17,output:[3,9,23,33,39],overal:20,overridden:6,overwrit:3,overwritten:3,packag:0,page:0,pair:[1,3,8,9,10,11,12,13,24,29,30,31,42],pair_metr:[13,18],pairmetr:[19,20,21],pairs_count:31,pairssimilaritydataload:3,pairwis:31,pairwise_loss:[1,22],pairwiseloss:[24,29,31],param:[3,24,29,30,32,34],paramet:[3,4,6,8,9,10,11,12,14,16,17,19,20,21,23,24,26,27,29,30,31,32,33,34,35,39,42],particular:10,pass:[3,7,26,39,42],path:39,pdf:[24,29,30],per:6,perform:[6,19,35],person:5,pictur:5,pin_memori:3,posit:[6,21,24,29,30,42],possibl:[8,9,10,11,12,17,20,21,30,42],pre:[],pre_collate_fn:[3,6],pre_encoder_col:6,precis:[17,20,21],precomput:19,predict:3,prefetch_factor:3,prepar:6,process:[6,16,19,35,37,38,39],process_result:39,produc:39,product:[10,33],progress:39,properti:[3,39],provid:[8,14,16,19,26,39],pseudo:3,publi:[24,30],purpos:[3,24,29,30,32,34],push:[23,30,34],pytorch:[26,39,42],pytorch_lightn:35,pytorch_metric_learn:26,pytorch_metric_learning_wrapp:[22,25],pytorchmetriclearningwrapp:26,quaterion_model:39,queri:[5,17,20,21],question:29,quick:26,r:17,rais:42,ram:39,random:3,rang:[9,11,12],rank:[21,29],ratio:17,reciproc:21,record:4,reduc:24,refactor:[],refer:26,regular:33,relat:19,relev:[17,20,21],remov:26,repeat:6,repres:[5,42],represent:7,requir:[3,6,37,38],reset:[14,16,19],respect:3,respons:[20,21],restor:39,result:[14,16,17,19],retriev:[3,17,20,21,29,35],retrieval_precis:[13,18],retrieval_r_precis:[13,15],retrieval_reciprocal_rank:[13,18],retrievalprecis:20,retrievalreciprocalrank:21,retrievalrprecis:17,routin:35,row:[20,21],runtimeerror:[],s:[11,12,35,39],same:[6,19],sampl:[3,6,8,9,10,11,12,24,35],sampler:3,samuel:11,save:[24,29,30,32,34,39],save_serv:39,scalar:[29,30,34],scale:[23,29],score:[3,5,17,20,24,29],search:[0,20],second:[5,24,29],see:[26,35],segaran:[11,12],self:26,send:6,sentenc:29,separ:30,serializ:[6,24,29,30,32,34],serv:39,set:[37,38],setup_dataload:39,sever:[],shape:[8,9,10,11,12,23,26,27,30,31,33,34,39,42],should:[3,5,6,8,24,39],shoulder:35,siamesedistancemetr:[],similar:[3,5,8,9,10,11,12,14,16,17,19,20,21,29,31,32],similarity_data_load:[1,2],similarity_dataset:[1,2],similarity_loss:[1,22],similarity_matrix:[8,9,10,11,12],similarity_metric_nam:[],similarity_sampl:[1,2],similaritydataload:[3,35,39],similaritygroupdataset:4,similaritygroupsampl:[3,4,5],similarityloss:[27,31,32,39],similaritypairsampl:[3,5],simpl:[4,7,26],singl:5,size:[17,24,26,27,31,33,37,38,39],size_averag:24,so:[29,30],softmax:[29,33],softmax_loss:[1,22],softmaxloss:33,some:39,sophist:39,sourc:[3,4,5,6,7,8,9,10,11,12,14,16,17,19,20,21,23,24,26,27,29,30,31,32,33,34,35,37,38,39,41,42],special:3,specif:[3,39],specifi:[29,34,39],sphinx:6,split:[3,6],squar:[],stage:[35,37,38,39,41],standard:4,state:[14,39],store:[16,19,39],str:[3,6,7,24,29,30,32,34,37,38,39,41],strategi:[30,34,42],string:7,subclass:26,subgroup:[3,5,19,24,29,31],subject:26,submodul:0,subpackag:0,suitabl:3,sum:24,support:[30,34],suppos:17,sure:10,symmetr:29,t:[29,30],t_co:3,target:[3,39],task:[4,29],temperatur:33,tensor:[3,8,9,10,11,12,14,16,17,19,20,21,23,24,26,27,29,30,31,33,34,37,38,39,42],tensorinterchang:39,test:[39,41],test_step:39,text:24,text_encod:39,than:[3,20],thei:39,them:[17,20,21,29],thi:[3,5,9,26,29,30,39,42],those:[10,26],timeout:3,tobi:[11,12],top:39,torch:[3,17,20,21,23,30,34,42],track:6,train:[1,3,6,23,24,26,27,29,30,31,32,33,34,35,41],train_collat:[1,2],train_dataload:[35,39],trainabl:39,trainable_model:[1,35,36],trainablemodel:[26,35,39],traincollat:6,trainer:[35,39],training_step:39,trainstag:[39,41],transform:3,trick:[11,12],triplet:[34,42],triplet_loss:[1,22],tripletloss:34,tripletmarginloss:26,truli:17,tupl:3,two:[24,35],type:[6,37,38,39,42],typealiasforwardref:6,typeerror:42,understand:10,unexpect:10,union:[3,37,38,39,42],uniqu:[3,5],unknown:[],unlik:30,unwrap_cach:39,updat:[16,19,39],us:[3,24,26,29,30,32,34,37,38,39],usag:[6,26],usual:6,util:[1,3,6,7],val_dataload:[35,39],valid:[30,35,39,41,42],validation_step:39,valu:[7,8,9,10,11,12,17,20,21,23,24,26,27,29,30,31,33,34,37,38,39,41,42],vector:39,vector_length:[23,26,27,31,33],version:3,wa:21,wai:[38,39],want:39,well:39,what:39,when:[10,29],where:17,whether:19,which:[3,4,5,20,21,24,39,42],whole:35,within:5,without:3,word:[24,29],work:[3,10,23,29,33],worker:[6,37,38],worri:29,wrapper:[4,26],x:[8,9,10,11,12],y:[8,9,10,11,12],yann:[24,30],you:[7,10,26,29,30,39],yourself:[26,30],zero:[17,26,27,31,33]},titles:["Welcome to Quaterion\u2019s documentation!","quaterion package","quaterion.dataset package","quaterion.dataset.similarity_data_loader module","quaterion.dataset.similarity_dataset module","quaterion.dataset.similarity_samples module","quaterion.dataset.train_collater module","quaterion.distances package","quaterion.distances.base_distance module","quaterion.distances.cosine module","quaterion.distances.dot_product module","quaterion.distances.euclidean module","quaterion.distances.manhattan module","quaterion.eval package","quaterion.eval.base_metric module","quaterion.eval.group package","quaterion.eval.group.group_metric module","quaterion.eval.group.retrieval_r_precision module","quaterion.eval.pair package","quaterion.eval.pair.pair_metric module","quaterion.eval.pair.retrieval_precision module","quaterion.eval.pair.retrieval_reciprocal_rank module","quaterion.loss package","quaterion.loss.arcface_loss module","quaterion.loss.contrastive_loss module","quaterion.loss.extras package","quaterion.loss.extras.pytorch_metric_learning_wrapper module","quaterion.loss.group_loss module","quaterion.loss.metrics module","quaterion.loss.multiple_negatives_ranking_loss module","quaterion.loss.online_contrastive_loss module","quaterion.loss.pairwise_loss module","quaterion.loss.similarity_loss module","quaterion.loss.softmax_loss module","quaterion.loss.triplet_loss module","quaterion.main module","quaterion.train package","quaterion.train.cache package","quaterion.train.cache.cache_config module","quaterion.train.trainable_model module","quaterion.utils package","quaterion.utils.enums module","quaterion.utils.utils module"],titleterms:{"enum":41,arcface_loss:23,base_dist:8,base_metr:14,cach:[37,38],cache_config:38,content:[0,1,2,7,13,15,18,22,25,36,37,40],contrastive_loss:24,cosin:9,dataset:[2,3,4,5,6],distanc:[7,8,9,10,11,12],document:0,dot_product:10,euclidean:11,eval:[13,14,15,16,17,18,19,20,21],extra:[25,26],group:[15,16,17],group_loss:27,group_metr:16,indic:0,loss:[22,23,24,25,26,27,28,29,30,31,32,33,34],main:35,manhattan:12,metric:28,modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],multiple_negatives_ranking_loss:29,online_contrastive_loss:30,packag:[1,2,7,13,15,18,22,25,36,37,40],pair:[18,19,20,21],pair_metr:19,pairwise_loss:31,pytorch_metric_learning_wrapp:26,quaterion:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],retrieval_precis:20,retrieval_r_precis:17,retrieval_reciprocal_rank:21,s:0,similarity_data_load:3,similarity_dataset:4,similarity_loss:32,similarity_sampl:5,softmax_loss:33,submodul:[1,2,7,13,15,18,22,25,36,37,40],subpackag:[1,13,22,36],tabl:0,train:[36,37,38,39],train_collat:6,trainable_model:39,triplet_loss:34,util:[40,41,42],welcom:0}})