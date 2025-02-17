const GRADE_OPTIONS = [
  "0.002M",
  "0.004_IP.BP.EP",
  "0.004_M",
  "0.004M",
  "0.004M_USP",
  "0.005M_EDTA-IH",
  "0.005M_IH",
  "0.0141N",
  "0.01M",
  "0.01M.NAOH_IP",
  "0.01M_AGNO3_PH.EURBP",
  "0.01M_EDTA-EP.BP",
  "0.01M_EDTA-IP",
  "0.01M_EDTA-USP",
  "0.01M_LEAD.NITRATE-IP",
  "0.01M_LEAD.NITRATE-USP.EP.BP",
  "0.01M_MICRO",
  "0.01M_PH.EUR",
  "0.01M_USP",
  "0.01M_ZNSO4-USP",
  "0.01MOLARITY",
  "0.01N",
  "0.01N_CAS",
  "0.01N_IODINE-USP",
  "0.01N_USP",
  "0.01N_USP_SODIUM_THIOSULFATE",
  "0.025M",
  "0.025M_H2SO4_IP",
  "0.025N",
  "0.025N_USP",
  "0.02M",
  "0.02M.NAOH_IP",
  "0.02M_EDTA-EP.BP",
  "0.02M_EDTA-IP",
  "0.02M_EDTA-USP",
  "0.02M_KMNO4-IP",
  "0.02M_KMNO4-PH.EUR.BP",
  "0.02M_PH.EUR",
  "0.02M_ZNSO4-IPBPPH.EUR",
  "0.02M_ZNSO4-USP",
  "0.02N",
  "0.02N_HCL_1.6ML_IN_1000ML",
  "0.02N_USP",
  "0.05M",
  "0.05M_CHINA",
  "0.05M_EDTA-EP.BP",
  "0.05M_EDTA-IP",
  "0.05M_EDTA-USP",
  "0.05M_IODINE-BPPH.EUR",
  "0.05M_IODINE_CHP",
  "0.05M_IODINE_IP..",
  "0.05M_LEAD.NITRATE-IP",
  "0.05M_LEAD.NITRATE-USP.EP.BP",
  "0.05M_NAOH_JP",
  "0.05M_SULFURIC_ACID_BP.EP.",
  "0.05M_USP",
  "0.05M_ZNSO4-IPBPPH.EUR",
  "0.05M_ZNSO4-USP",
  "0.05N",
  "0.05N_CAN-USP",
  "0.05N_IH",
  "0.05N_IODINE-USP",
  "0.1",
  "0.1M",
  "0.1M.HCL_CH_P",
  "0.1M.NAOH_CH_P",
  "0.1M.NAOH_IP",
  "0.1M_AGNO3_IP",
  "0.1M_AGNO3_PH.EUR",
  "0.1M_BP",
  "0.1M_CAN-IP",
  "0.1M_CAN-PH.EUR",
  "0.1M_CAS",
  "0.1M_CERICSULFATE-USP",
  "0.1M_EDTA-EP",
  "0.1M_EDTA-IP",
  "0.1M_EDTA-USP",
  "0.1M_FAS-BP",
  "0.1M_FAS-IP",
  "0.1M_FAS-USP",
  "0.1M_H2SO4_CHP",
  "0.1M_H2SO4_IP",
  "0.1M_HCL_IP",
  "0.1M_IP",
  "0.1M_IP_SODIUM_THIOSULFATE",
  "0.1M_KOH_IP",
  "0.1M_KOH_PH.EUR",
  "0.1M_LEAD.NITRATE-IP",
  "0.1M_NAOH-CH.P",
  "0.1M_NAOH_ETHANOLIC_BP.PH.EUR",
  "0.1M_PERCHLORIC_ACID_P_IP",
  "0.1M_PERCHLORIC_ACID_P_PH.EUR",
  "0.1M_PH.EUR",
  "0.1M_USP",
  "0.1M_ZNSO4-IPBPPH.EUR",
  "0.1M_ZNSO4-USP",
  "0.1MOL_L_NAOH_CH",
  "0.1MOLARITY",
  "0.1N",
  "0.1N.",
  "0.1N_ALCOHOLIC",
  "0.1N_CAS",
  "0.1N_IODINE-USP",
  "0.1N_KMNO4-USP",
  "0.1N_KOH_METHANOLIC_USP",
  "0.1N_LEAD.NITRATE-USP.EP.BP",
  "0.1N_METTLER",
  "0.1N_PERCHLORIC_ACID.",
  "0.1N_TBAH-METHANOL_USP",
  "0.1N_TBAH-USP",
  "0.1N_USP",
  "0.1NHCL_USP_METHANOLIC",
  "0.1NORMALITY",
  "0.2M_HCL-CH.P",
  "0.2N_NAOH_USP",
  "0.5M",
  "0.5M.NAOH_IP",
  "0.5M_EP",
  "0.5M_IODINE-BPPH.EUR",
  "0.5M_IP_HCL",
  "0.5M_KOH_EP",
  "0.5M_KOH_IP",
  "0.5M_NAOH_JP",
  "0.5M_SULFURIC_ACID_EP.BP",
  "0.5MOLARITY",
  "0.5N",
  "0.5N_AGNO3_USP",
  "0.5N_USP",
  "0.5NORMALITY",
  "1.0M",
  "1.0M_H2SO4_IP",
  "1.0M_HCL_IP",
  "1.0M_KOH_IP",
  "1.0M_NAOH_IP",
  "1.0M_NAOH_JP",
  "1.0MOL_L",
  "1.0N",
  "1.0N_USP",
  "10THSHELF",
  "11TH-STROKE_TO_15TH-STROKE",
  "11THSHELF",
  "12THSHELF",
  "1MOL_NAOH_CH_P",
  "1N_ACETIC_ACID_USP",
  "1ST-STROKE_TO_5TH-STROKE",
  "1ST_2ND_STROKE",
  "1ST_STROKE",
  "1STSTROKE",
  "20_PER_CITRIC_ACID-BP.PH.EUR",
  "2008_BSCP_DH_PREP",
  "2008_BSCP_RTU",
  "2008_CA_DH_PREP",
  "2008_CA_RTU",
  "2008_CLA_DH_PREP",
  "2008_CLA_RTU",
  "2008_DENA_DH_PREP",
  "2008_DENA_RTU",
  "2008_EEB_DH_PREP",
  "2008_EEB_RTU",
  "2008_FTM_DH_600ML",
  "2008_FTM_DH_PREP",
  "2008_FTM_DH_STER",
  "2008_FTM_RTU_100ML",
  "2008_FTM_RTU_STER",
  "2008_LBA_DH_AMP",
  "2008_LBA_DH_CHL",
  "2008_LBA_DH_PREP",
  "2008_LBA_RTU",
  "2008_LBA_RTU_AMP",
  "2008_LBB_DH_PREP",
  "2008_LBB_RTU",
  "2008_MCA_DH_PREP",
  "2008_MCA_RTU",
  "2008_MCB_DH_PREP",
  "2008_MCB_RTU",
  "2008_MEA_DH_PREP",
  "2008_MEA_RTU",
  "2008_MSA_DH_PREP",
  "2008_MSA_RTU",
  "2008_PDA_RTU",
  "2008_PEPTONE_DH_PREP",
  "2008_R2A_DH_PREP",
  "2008_R2A_RTU",
  "2008_RCM_RTU",
  "2008_RF-A_NEU_RTU",
  "2008_RF-A_RTU",
  "2008_RODAC_N_RTU",
  "2008_RVSEB_RTU",
  "2008_SCDA_DH_PREP",
  "2008_SCDA_N_RTU",
  "2008_SCDA_RTU",
  "2008_SCDA_STRIPS_RTU",
  "2008_SCDM_DH_600ML",
  "2008_SCDM_DH_MLT",
  "2008_SCDM_DH_PREP",
  "2008_SCDM_DH_STER",
  "2008_SCDM_RTU",
  "2008_SCDM_RTU_100ML",
  "2008_SCDM_RTU_BI",
  "2008_SCDM_RTU_MLT",
  "2008_SCDM_RTU_STER",
  "2008_SDA_DH_PREP",
  "2008_SDA_RTU",
  "2008_SDB_DH_PREP",
  "2008_SDB_RTU",
  "2008_VRBGA_DH_PREP",
  "2008_VRBGA_RTU",
  "2008_XLDA_DH_PREP",
  "2008_XLDA_RTU",
  "20WV_IRON_FREE_CITRICACID_IP",
  "25_PER_BARIUM_CHLORIDE-IP",
  "290009888_INSTRUCTION",
  "2M_NAOH_IP",
  "2N",
  "2N_SULFURICACID_AS",
  "2ND_STROKE",
  "2NDSHELF",
  "2NDSTROKE",
  "3N_HCL-USP_25.5ML_TO_100ML",
  "3RD_4TH_STROKE",
  "3RD_STROKE",
  "3RDSHELF",
  "3RDSTROKE",
  "4TH_STROKE",
  "4THSHELF",
  "5M_ACETIC_ACID-IP_28.5ML_100ML",
  "5TH_6TH_STROKE",
  "5TH_STROKE",
  "5THSHELF",
  "6BOWLS",
  "6N_AMMONIUM_HYDROXIDE-USP",
  "6N_HCL_USP_510ML_IN_1000ML",
  "6TH-STROKE_TO_10TH-STROKE",
  "6TH_STROKE",
  "6THSHELF",
  "7N_SULFURICACID_AS",
  "7THSHELF",
  "8THSHELF",
  "9THSHELF",
  "A_LOOP_CLB",
  "A_UV_1",
  "A_UV_2",
  "A_UV_RI",
  "ACCESSORIES",
  "ACETATE_BUFFER_PH_3.5-IP",
  "ACTIVATED_ZINC_R",
  "AF",
  "AF_1",
  "AF_2",
  "AF_3",
  "AFTER_FIRST_FILTRATION",
  "AFTERDRYING_COMM",
  "AFTERDRYING_VAL",
  "AFTERFILTERFLUSH",
  "AFTERTERMINALSTERILIZATION",
  "AGILENT",
  "AGILENT_FLUSH_HPLC",
  "AGILENT_MWD_DETECTOR",
  "AIR_DRYING",
  "AMB_COATING_DISPERSION",
  "AMMONIUM_THIOCYANATE_SOL-USP",
  "ANAEROBIC",
  "ANTONPARR",
  "AQ_BET",
  "AQ_EM",
  "AQ_GPT",
  "AQ_MLT",
  "AQ_PLATE",
  "AQ_SCAN_RDI",
  "AQ_STER",
  "AQ_VISUAL",
  "AQ_VITEK2",
  "AQ_WAT_SPL",
  "AQUEOUS_ELECTRODE_ACTIVATION",
  "AQUEOUS_FILM_COATING_SOLUTION",
  "ARSENIC_STD_SOL_10PPM-IP",
  "ARSENIC_STD_STK_ASPERBPPH",
  "ARSENIC_TRIOXIDE_STK_AS",
  "BARIUM_CHLORIDE_TS-USP",
  "BARRIER_C-PELLETS",
  "BARRIER_C_DRIED_PELLETS",
  "BARRIER_COATING_SOLUTION",
  "BARRIERCOATED_TABLETS",
  "BD_CYCLE",
  "BEFORETERMINALSTERILIZATION",
  "BET",
  "BET_KTA_CSE",
  "BF",
  "BF_1",
  "BF_2",
  "BF_3",
  "BI",
  "BI_EXPOSED",
  "BI_UNEXPOSED",
  "BIN_BLENDER",
  "BIN_BLENDER_1",
  "BINDER_SOLUTION",
  "BLEND",
  "BLEND_A",
  "BLEND_AFTR_UNLOADING",
  "BLEND_ASSAY",
  "BLEND_B",
  "BLEND_BD_TD_PSD",
  "BLEND_C",
  "BLEND_D",
  "BLEND_E",
  "BLEND_HOMOGENEITY",
  "BLEND_INTERMEDIATE",
  "BLEND_RS",
  "BLEND_STAGE-A",
  "BLENDERBIN",
  "BLENDING",
  "BLISTER_PACKING_MACHINE",
  "BLUE_SOL_EP_BP",
  "BOTTOMSAMPLE",
  "BU",
  "BU_FORINFO",
  "BUFFER_BOTTLE",
  "BUFFER_VESSEL",
  "BUFFERTANK",
  "BULK",
  "BULK_CHEM1",
  "BULK_CHEM2",
  "BULK_CHEM3",
  "BULK_RS",
  "BULK1",
  "BULK2",
  "BULK3",
  "BULK4",
  "BULK5",
  "BULK6",
  "BULK7",
  "C15_CLB_OVEN_KF",
  "C6_CLB_RSD_LIMS",
  "C6_PM",
  "CAL_ADJUST_100_500_1000µL",
  "CAL_ADJUST_1000_5000_10000µL",
  "CAL_ADJUST_20_100_200µL",
  "CAL_ADJUST_500_2500_5000µL",
  "CAL_FIXED_10µL",
  "CAL_FIXED_100µL",
  "CAL_FIXED_1000µL",
  "CAL_HANDYSTEP_1.0ML",
  "CAL_HANDYSTEP_12.5",
  "CAL_HANDYSTEP_5ML",
  "CAPSULE_CHECK_WEIGHER",
  "CAPSULE_FILLING_MACHINE",
  "CAPSULE_POLISHING_MACHINE_CADU",
  "CAPSULEFILLINGMACHINE",
  "CAPSULEPOLISHERCUMMETALDET",
  "CCS-IP",
  "CCS-USP",
  "CENTRIFUGE_MONTHLY",
  "CHARGE_BOMB",
  "CHARGE_BOMB_SS",
  "CHARGE_BOMB1",
  "CHEMICAL",
  "CHLORIDE_STD_SOL-25PPM-IP",
  "CHLOROPLATINIC_ACID_SOL50PPM",
  "CL_INOCULUM_PREPARATION",
  "CL_SUBCULTURING",
  "CLB",
  "CLB_0.5-5_INCREAMENT_0.005ML",
  "CLB_1-10_INCREAMENT_0.01ML",
  "CLB_10-100INCREMENT_0.1µL",
  "CLB_100-1000_INCREAMENT_1µL",
  "CLB_2016171",
  "CLB_2016178",
  "CLB_2018BB6",
  "CLB_2540916",
  "CLB_2560916",
  "CLB_325NM",
  "CLB_32729224",
  "CLB_32729525",
  "CLB_33329681",
  "CLB_365NM",
  "CLB_3POINT",
  "CLB_5080618",
  "CLB_5110618",
  "CLB_ADJUSTABLE",
  "CLB_AGILENT",
  "CLB_ALARM_CTO15",
  "CLB_ANALYTICAL_BALANCES",
  "CLB_ANTON_DMA_4100",
  "CLB_ANTON_DMA_4500",
  "CLB_AT_METROHM",
  "CLB_AT_METROHM_1",
  "CLB_AT_METROHM_20ML",
  "CLB_AT_METROHM_AG",
  "CLB_AT_METROHM_AQ",
  "CLB_AT_METROHM_NAQ",
  "CLB_AT_METROHM_PT",
  "CLB_AT_METTLER",
  "CLB_AT_METTLER_AG_ELECTRODE",
  "CLB_AT_METTLER_BURETTE",
  "CLB_AT_METTLER_ELECTRODE",
  "CLB_AT_METTLER_SST",
  "CLB_BIOSAFETY_CABINET",
  "CLB_BOD_22.5",
  "CLB_BOD_32.5",
  "CLB_BOD_43.0",
  "CLB_BOD_INCUBATOR",
  "CLB_BOD_STBY",
  "CLB_BOTTLE_TOP_BURETTE",
  "CLB_CHEWINGGUM_TESTER",
  "CLB_COLDCHAMBER",
  "CLB_COLONY_COUNTER",
  "CLB_CONDUCTIVITY_100µSCM",
  "CLB_CONDUCTIVITYMETER",
  "CLB_COOLING_CABINET",
  "CLB_COOLING_CHAMBER",
  "CLB_CWF1313",
  "CLB_DEEP_FREEZER",
  "CLB_DENSITY_RUDOLPH",
  "CLB_DISSO",
  "CLB_DISTEK",
  "CLB_DISTEK_DISSO",
  "CLB_DN",
  "CLB_ELE_DISSO",
  "CLB_ELE_DISSO_6BOWLS",
  "CLB_ELE_EDI-2SA",
  "CLB_ELE_SMALL_VOL_DISSO",
  "CLB_ELECTROLAB",
  "CLB_ELECTRONIC_PIPETTE",
  "CLB_FID",
  "CLB_FIXED",
  "CLB_FLD_FLUSHING",
  "CLB_FLUSHING",
  "CLB_FREEZER",
  "CLB_FREEZER_CTO6",
  "CLB_FTIR",
  "CLB_FUME_HOOD",
  "CLB_GC",
  "CLB_GC_ALS_C1",
  "CLB_GC_ECD",
  "CLB_GC_FID",
  "CLB_GC_FID_ECD",
  "CLB_GC_TCD_FID",
  "CLB_GLASSWARE_OVEN",
  "CLB_H_CLASS",
  "CLB_HEATING_BLOCK",
  "CLB_HMA",
  "CLB_HMA_CSMART",
  "CLB_HOT_AIR_OVEN",
  "CLB_HPLC_AGILENT",
  "CLB_HPLC_AGILENT_BIN_PUMP",
  "CLB_HPLC_AGILENT_BIN_PUMP_0.3",
  "CLB_HPLC_AGILENT_BINARY_RID0.3",
  "CLB_HPLC_AGILENT_FLD_DETECTOR",
  "CLB_HPLC_AGILENT_QUAR_PUMP0.3",
  "CLB_HPLC_AGILENT_QUAR0.3_DAD",
  "CLB_HPLC_AGILENT_QUAR0.3_MWD",
  "CLB_HPLC_AGILENT_QUART_PUMP",
  "CLB_HPLC_AGILENT_RID_DETCTR0.3",
  "CLB_HPLC_AGILENT_RID_DETECTOR",
  "CLB_HPLC_DAD_1100_1200",
  "CLB_HPLC_DAD_1260",
  "CLB_HPLC_INTECH",
  "CLB_HPLC_MWD_1100_1200",
  "CLB_HPLC_MWD_1260",
  "CLB_HPLC_UV_1100_1200_1260",
  "CLB_HPLC_UV_1290_1260",
  "CLB_HPLC_WATERS",
  "CLB_HPLC_WATERS_PDA",
  "CLB_HPLC_WATERS_PDA_2998",
  "CLB_HPLC_WATERS_QPUM_UVVIS_RID",
  "CLB_HPLC_WATERS_QUA_PUMP_UVVIS",
  "CLB_HPLC_WATERS_QUART_PUMP_PDA",
  "CLB_HPLC_WATERS_QUART0.3_PDA",
  "CLB_HQC_068",
  "CLB_HQC_073",
  "CLB_IC_CD_VWD",
  "CLB_IC_CD_VWD_ECD",
  "CLB_JASCO",
  "CLB_KF",
  "CLB_LAF",
  "CLB_MASTERSIZER_2000",
  "CLB_MASTERSIZER_3000",
  "CLB_MELTING_POINT",
  "CLB_MICRO",
  "CLB_MICRO_BALANCE_1",
  "CLB_MICRO_BALANCE_2",
  "CLB_MICRO_BALANCE_3",
  "CLB_MICRO_BALANCE_4",
  "CLB_MICRO_OLYMPUS",
  "CLB_MICRO_PIPETTE_10µL-100µL",
  "CLB_MICRO_PIPETTE_10µL-1000µL",
  "CLB_MICRO_PIPETTE_10µL-200µL",
  "CLB_MICRO_PIPETTE_100µL-1000µL",
  "CLB_MICRO_PIPETTE_1000-10000µL",
  "CLB_MICRO_PIPETTE_1000µL-5000µ",
  "CLB_MICRO_PIPETTE_1ML-10ML",
  "CLB_MICRO_PIPETTE_2µL-20µL",
  "CLB_MICRO_PIPETTE_20µL-200µL",
  "CLB_MICRO_PIPETTE_200µL-1000µL",
  "CLB_MICRO_PIPETTE_40µL-200µL",
  "CLB_MICRO_PIPETTE_5µL-100µL",
  "CLB_MICRO_PIPETTE_500µL-5000µL",
  "CLB_MICROLIT_BEATUS_10-100ML",
  "CLB_MICROLIT_BEATUS_5-60ML",
  "CLB_MICROSCOPE",
  "CLB_MILLIQ",
  "CLB_MKT",
  "CLB_MS_YEARLY",
  "CLB_NLHC16SI",
  "CLB_NPQC_012",
  "CLB_NPQC_041",
  "CLB_OSMOMETER",
  "CLB_OVEN_COULOMETER",
  "CLB_OVEN_EP",
  "CLB_OVEN_EXT",
  "CLB_OVEN_KF",
  "CLB_OVEN_KF_DAILY",
  "CLB_PAN",
  "CLB_PAN_BALANCE_1",
  "CLB_PAN_BALANCE_10",
  "CLB_PAN_BALANCE_2",
  "CLB_PAN_BALANCE_3",
  "CLB_PAN_BALANCE_4",
  "CLB_PAN_BALANCE_5",
  "CLB_PAN_BALANCE_6",
  "CLB_PAN_BALANCE_7",
  "CLB_PAN_BALANCE_8",
  "CLB_PAN_BALANCE_9",
  "CLB_PAN_BALANCES_8",
  "CLB_PAN_BALANCES_C6",
  "CLB_PERKIN_ELMER",
  "CLB_PERKIN_ELMER_ATR",
  "CLB_PERKIN_ELMER_UTAR",
  "CLB_PH",
  "CLB_PH_METROHM_5POINT",
  "CLB_PH_METTLER",
  "CLB_PH_METTLER_3_POINT",
  "CLB_PH_METTLER_5_POINT",
  "CLB_PH_METTLER_HIGHER_RANGE",
  "CLB_PH_METTLER_LOWER_RANGE",
  "CLB_PHOTO_METER",
  "CLB_PHOTO_STABILITY_CHAMBER",
  "CLB_PM",
  "CLB_POCKETSCALE_BALANCE_1",
  "CLB_POLARIMETER_RUDOLPH",
  "CLB_PREVENTIVE_STB_CTO15",
  "CLB_QC-E022",
  "CLB_QC_002",
  "CLB_QC_053",
  "CLB_QC_097",
  "CLB_QC_105",
  "CLB_QC_106",
  "CLB_QC_107",
  "CLB_QC_108",
  "CLB_QC_112",
  "CLB_QC_114",
  "CLB_QC_134",
  "CLB_QC_137",
  "CLB_QC_153",
  "CLB_QC_154",
  "CLB_QC_161",
  "CLB_QC_175",
  "CLB_QC_176",
  "CLB_QC_177",
  "CLB_QC_178",
  "CLB_QC_207",
  "CLB_QC_208",
  "CLB_QC_220",
  "CLB_QC_276",
  "CLB_QC_277",
  "CLB_QC_294",
  "CLB_QC_295",
  "CLB_QC_297",
  "CLB_QC_298",
  "CLB_QC_299",
  "CLB_QC_300",
  "CLB_QC_301",
  "CLB_QC_303",
  "CLB_QC_304",
  "CLB_QC_305",
  "CLB_QC_306",
  "CLB_QC_307",
  "CLB_QC_308",
  "CLB_QC_309",
  "CLB_QC_310",
  "CLB_QC_311",
  "CLB_QC_312",
  "CLB_QC_313",
  "CLB_QC_314",
  "CLB_QC_315",
  "CLB_QC_316",
  "CLB_QC_371",
  "CLB_RAMAN",
  "CLB_REFRACTOMETER_ANTONPAAR",
  "CLB_REFRACTOMETER_RUDOLPH",
  "CLB_REFRIGERATOR",
  "CLB_REFRIGERATOR_CTO6",
  "CLB_REFRIGERATOR1",
  "CLB_ROTARY_SHAKER",
  "CLB_ROTARY_SHAKER_OS7100",
  "CLB_ROTARY_SHAKER_SK600",
  "CLB_RSD_AVG_LIMS",
  "CLB_RSD_LIMS",
  "CLB_RSD_REPORT",
  "CLB_SC_25C_80RH_AND_40C_75RH",
  "CLB_SC_EXT_CAL_1",
  "CLB_SCHLEUNIGER",
  "CLB_SEMIMICRO_BALANCE_1",
  "CLB_SEMIMICRO_BALANCE_2",
  "CLB_SEMIMICRO_BALANCE_3",
  "CLB_SEMIMICRO_BALANCE_4",
  "CLB_SEMIMICRO_BALANCE_MCA225S",
  "CLB_SHIMADZU",
  "CLB_SHIMADZU_ATR",
  "CLB_SONICATOR-EN30US",
  "CLB_SONICATOR-NONSTD",
  "CLB_SONICATOR-RK510H",
  "CLB_SONICATOR_LEELASONIC",
  "CLB_SONICATOR_LEELASONIC_800",
  "CLB_SONICATOR_LIFECARE",
  "CLB_SONICATOR_LIFECARE_400",
  "CLB_SONICATOR_POWERSONIC",
  "CLB_SONICATOR_RK-1028",
  "CLB_SONICATOR_RK-1028H",
  "CLB_SONICATOR_UCB",
  "CLB_STABILITY_CHAMBER",
  "CLB_STABILITY_CHAMBER_23C_75RH",
  "CLB_STB_CHAMBER_CTO6",
  "CLB_STOP_WATCH",
  "CLB_TANGO-R",
  "CLB_TCD",
  "CLB_TCD_FID",
  "CLB_TEMPERATURE",
  "CLB_THERMO_REACTOR",
  "CLB_ULTRAMICRO",
  "CLB_ULTRAMICRO_BALANCE_1",
  "CLB_UPLC_ACQUITY_LOOP_100",
  "CLB_UPLC_ACQUITY_LOOP_50",
  "CLB_UPLC_ACQUITY_TM_PDA",
  "CLB_UPLC_DAD",
  "CLB_UPLC_FLD",
  "CLB_UPLC_HCLASS_PDA",
  "CLB_UPLC_HCLASS_PDA_D2",
  "CLB_UPLC_HCLASS_TUV",
  "CLB_UPLC_PDA",
  "CLB_UPLC_PDA_C1",
  "CLB_UPLC_TUV",
  "CLB_UPLC_TUV_C1",
  "CLB_UPLC_TUV_PDA",
  "CLB_UPLC_TUV_RI",
  "CLB_UV_ISA",
  "CLB_VERNIER_CALIPER",
  "CLB_VERTICAL_AUTOCLAVE",
  "CLB_VISCO_CAPCALC",
  "CLB_VISCO_DV2TLV",
  "CLB_VISCO_DV3TLVTJ0",
  "CLB_VISCOMETER",
  "CLB_WATER_BATH",
  "CLB_WATERS",
  "CLB_WB_EXT_CAL_1",
  "CLB_WEEKLY",
  "CLB_WS_INCUBATOR",
  "CLB_XRD",
  "CLEANING",
  "CM",
  "COATED_TABLETS",
  "COATED_TABLETS_DP",
  "COATING_DISPERSION",
  "COATING_MACHINE",
  "COATING_SOLUTION",
  "COATING_SUSPENSION",
  "COLLOIDAL_SILI_DIOXIDE_DISPER",
  "COMPLEXATION",
  "COMPOUNDING_BOTTOM",
  "COMPOUNDING_ISOLATOR",
  "COMPOUNDING_MIDDLE",
  "COMPOUNDING_TOP",
  "COMPOUNDING_VESSEL_150L",
  "COMPRESSED_TABLETS",
  "COMPRESSION",
  "COMPRESSION_CORE_TABLETS",
  "COMPRESSION_CU_HIGH",
  "COMPRESSION_CU_LOW",
  "COMPRESSION_STRATIFIED",
  "CONDUCTIVITY_DAILY",
  "CONDUCTIVITY_MONTHLY",
  "CONDUCTIVITY_WEEKLY",
  "CONTAMINATION_CONTROL_DISPENSE",
  "CONTAMINATIONCONTROLSTATION",
  "CONTENT_UNIFORMITY",
  "COOLING_CHAMBER",
  "CORE_PELLETS",
  "CORETABLETS",
  "CS",
  "CSS-IP",
  "CSS-USP",
  "CSVO-35-µP_P",
  "CSVO-42L-SPL",
  "CV_CHEMICAL",
  "DAD",
  "DAILY",
  "DEDUSTER_METAL_DETECTOR",
  "DEEPFREEZER",
  "DIL_ACETIC_ACID-IP",
  "DIL_ACETIC_ACID_BPPH.EUR",
  "DIL_AMMONIA_R1_41G_IN_100ML",
  "DIL_AMMONIA_SOL_IP",
  "DIL_HCL_20G_IN_100ML",
  "DIL_HNO3_IP-10.6TO100ML",
  "DIL_HNO3_PH.EUR-20G_IN_100ML",
  "DIL_NAOH_8.5_IN_100ML",
  "DIL_SODIUM_HYDROXIDE_SOL-IP",
  "DISCARD_LOAD",
  "DISINFECTANT",
  "DISPENSINGISOLATOR",
  "DISSOLUTION",
  "DISSOLUTION_PROFILE",
  "DL-1",
  "DL-2",
  "DOSINGNEEDLES",
  "DOSINGPUMP",
  "DOSINGVESSEL",
  "DP",
  "DP_IP",
  "DRAIN",
  "DRIED.E.C.PELLETS",
  "DRIED_DL_PELLETS",
  "DRIED_GRANULES",
  "DRIED_OVER_COATED_PELLETS",
  "DRIED_POLISHED_ECPELLETS",
  "DRIED_SCREEN_SUB_COATE_PELLETS",
  "DRIED_SCREENED_D.L_PELLETS",
  "DRIED_SCREENED_E.C_PELLETES",
  "DRIED_SEALCOATED_PELLETS",
  "DRIED_SR1_C-PELLETS",
  "DRIED_SR2_PELLETS",
  "DRUG_COATING_DISPERSION",
  "DRUG_COATING_PELLETS",
  "DRUG_DISPERSION",
  "DRUG_LAYERED_STAGE-I",
  "DRUG_LAYERED_STAGE-II",
  "DRUG_LAYERED_TABLETS",
  "DRUG_LAYERING",
  "DRUG_LAYERING_SOLUTION",
  "DRUG_LOADED_PELLETS",
  "DRUG_LOADED_PELLETS_STAGE-2",
  "DRUG_POLYMER_SOLUTION",
  "DRY_HOLD",
  "DRY_MIXING",
  "DRY_MIXING_BD",
  "DS",
  "DS_IP",
  "DURINGFILLINGFOREVERY30MIN",
  "DW",
  "ELE_MULTICHANNEL_TABCAP_COUNT",
  "ELEC_MULTICHANNEL_COUNTER",
  "ELECTRODE_ACTIVATION",
  "EM",
  "EMPTY_CAPSULE_ELIMINATOR",
  "EMPTY_CAPSULE_SORTER",
  "END",
  "END_OF_LYOPHILIZATION",
  "ENDFILLING",
  "ENDFROMUPSTREEMOFONLINEFILTER",
  "ENDOFFILLING",
  "ENDOFFILLINGFROM",
  "ENDOFFILLINGFROMFILTRATION",
  "ENDOFFILLINGFROMMFGVESSEL",
  "ENTERIC_COATED_PELLETS",
  "ENTERIC_COATED_TABLETS",
  "ENTERIC_COATING_DISPERSION",
  "ENTERIC_COATING_SOLUTION",
  "EOF",
  "EP",
  "ER_COATING_DISPERSION",
  "ER_COATING_PELLETS",
  "EU",
  "FB",
  "FCC-USP",
  "FCS_IP",
  "FDS",
  "FDS_BF",
  "FDS_BFD",
  "FIFTHSHELF",
  "FILLED_CHECK_WEIGHED_CAPSULES",
  "FILLED_CHECK_WEIGHT_CAPS",
  "FILLED_WEIGH_CHECKED_CAPSULES",
  "FILLEDCARTRIDGES",
  "FILLINGISOLATOR",
  "FILLINGNEEDLES",
  "FILM_COATED",
  "FILM_COATED_TABLETS",
  "FILM_COATING",
  "FILM_COATING_DISPERSION",
  "FILM_COATING_SOLUTION",
  "FILM_COATING_SUSPENSION",
  "FILTERATION_VESSEL",
  "FILTEREDBULK",
  "FILTERFLUSH_1",
  "FILTERFLUSH_2",
  "FILTERFLUSH_3",
  "FILTRATION_1STFILTERFLUSH",
  "FILTRATION_2NDFILTERFLUSH",
  "FILTRATION_3RDFILTERFLUSH",
  "FILTRATIONVESSEL",
  "FLUID_BED_DRYER",
  "FLUID_BED_EQUIPMENT",
  "FLUSHING_HPLC",
  "FLUSHING_UPLC",
  "FORM_BUFFER",
  "FOURTHSHELF",
  "FP",
  "FP_AS",
  "FP_AS_DS",
  "FP_CHEM1",
  "FP_CHEM2",
  "FP_CHEM3",
  "FP_CHEM4",
  "FP_CHEM5",
  "FP_DES",
  "FP_DES_AS_DP",
  "FP_DISSO",
  "FP_DISSO1",
  "FP_DP",
  "FP_DP1",
  "FP_DP12",
  "FP_DP6",
  "FP_DT",
  "FP_ETH",
  "FP_INNOVATOR",
  "FP_MICRO",
  "FP_MICRO_UOD",
  "FP_PHYSICAL",
  "FP_RS",
  "FP_RS_PSD",
  "FP_RS1",
  "FP_SPLIT",
  "FP_SUOD",
  "FP_UOD",
  "FP_UOD1",
  "FP_UOD2",
  "FP_XRD",
  "FREWITT_MILL",
  "FROMFILTRATIONVESSEL",
  "FROMSAMPLINGVALVEOFVESSEL",
  "FUMIGATION",
  "FUN_COATING_DIS_PREP",
  "FUNCTIONAL_COATED_TABLETS",
  "FUNCTIONAL_COATING_SOLUTION",
  "GANSCOATER",
  "GANSCOATER2",
  "GELATIN_MASS",
  "GELATIN_SOLUTION",
  "GLASSWARE_WASHING",
  "GLASSWARE1_LOAD",
  "GLASSWARE2_LOAD",
  "GLOSSING",
  "GLOVE_BOX",
  "GLOVEBOX",
  "GLYCERINE_BASE_TS-USP",
  "GR001",
  "GR002",
  "GRANULATINGSOLUTION",
  "GRANULATION_WET_MASS",
  "HANDYSTEP",
  "HCL_R_10G_PER_L",
  "HCL_R1_70G_HCL_100ML_WATER",
  "HIGH_DOSE_10-8",
  "HIGH_DOSE_10K",
  "HIGH_HARDNESS_DS",
  "HIGH_SPEED",
  "HIGH_THICKNESS_DS",
  "HOLDTIME_BULK",
  "HOLDTIME_FP",
  "HOLDTIMESTUDY",
  "HOLDTIMESTUDYTUBECOMPATIBILITY",
  "HOMOGENIZATION",
  "HPMC_SEAL_COATED_PELLETS",
  "HPMC_SEAL_COATING_SOLUTION",
  "HSO_CONTENT",
  "HYDRO_ALCOHOLIC_FILM_COATG_SOL",
  "HYPOPHOSPHOROUS_REAGENT-BP_PH.",
  "IC_FLUSHING",
  "IFDS",
  "IH",
  "IMPRINTED_INSPECTED_TABLETS",
  "IMPRINTED_TABLETS",
  "IMPRINTING",
  "INITIAL",
  "INITIALFILLING",
  "INITIALSTROKE",
  "INNOVATOR",
  "INS_BAND_SEAL_CAPS",
  "INSPECTED_CAPSULES",
  "INSPECTED_COATED_TABLETS",
  "INSPECTED_PRINTED_TABS",
  "INSPECTED_TABS",
  "INST_EQUIP_CLEANING",
  "INT",
  "INTERNAL",
  "IP",
  "IP-E.CPELLETS",
  "IP-FILM.CTABLETS",
  "IP-SPRINKLEDE.CPELLETS",
  "IP_0.5MG",
  "IP_1MG",
  "IP_GRANULES",
  "IP_RS",
  "IP_SUOD",
  "IPQC_ISOLATOR",
  "IR_DRUD_DISPERSION",
  "IRON_STD_20PPM_FE_PH.EUR.BP",
  "IRON_STD_SOL_20PPM_FE-IP",
  "IS",
  "IS_1",
  "IS_2",
  "IS_3",
  "IS_4",
  "JACKETED_COMPOUNDING_VESSEL_1",
  "JACKETED_COMPOUNDING_VESSEL_3",
  "JACKETED_FILTRATION_VESSEL_1",
  "JAPAN",
  "LAUDA",
  "LBPC",
  "LBPC_BECKMAN",
  "LC-MS",
  "LCMS",
  "LEAD_ACETATE_COTTON_BP_PH.EUR",
  "LEAD_ACETATE_COTTON_IP",
  "LEAD_ACETATE_PAPER_BPPH.EUR",
  "LEAD_ACETATE_SOL_IP",
  "LEAD_ACETATE_SOL_R-BP_PH.EUR",
  "LEAD_NITRATE_STK_SOL_USP",
  "LEAD_STD_BP.PH.EUR",
  "LEAD_STD_SOL_0.1_PER_PB",
  "LEAD_STD_SOL_100PPM-IP",
  "LEAD_STD_SOL_10PPM-IP",
  "LEAD_STD_SOL_1PPM-IP",
  "LEAD_STD_SOL_20PPM-IP",
  "LEAD_STD_SOL_2PPM-IP",
  "LOT-A",
  "LOT-B",
  "LOT-C",
  "LOT_D",
  "LOT_E",
  "LOT_F",
  "LOW_HARDNESS_DS",
  "LOW_SPEED",
  "LOW_THICKNESS_DS",
  "LUBRICATED_BLEND",
  "LUBRICATED_EC_PELLETS",
  "LUBRICATED_ER_PELLETS",
  "LUBRICATED_GRANULES",
  "LUBRICATED_PELLETS",
  "LYOPHILIZER",
  "MAG_SULFATE_IN_DIL_H2SO4",
  "MANIFOLD",
  "MANUFACTURING_VESSEL_1",
  "MAXIMUM_SPEED",
  "MD_BCSA_DH_PREP",
  "MD_BCSA_RTU",
  "MD_BGA_DH_PREP",
  "MD_BGLBB_DH_PREP",
  "MD_BPA_DH_PREP",
  "MD_BPA_RTU",
  "MD_BSA_DH_PREP",
  "MD_BSCP_0.5_SL_5.6PS",
  "MD_BSCP_DH_20_4_0.5",
  "MD_BSCP_DH_80_0.1_.5",
  "MD_BSCP_DH_80_1",
  "MD_BSCP_DH_80_1_.5",
  "MD_BSCP_DH_80_2_1",
  "MD_BSCP_DH_80_4_1",
  "MD_BSCP_DH_80_8_0.8",
  "MD_BSCP_DH_PREP",
  "MD_BSCP_RTU",
  "MD_CA_DH_PREP",
  "MD_CA_RTU",
  "MD_CLA_DH_PREP",
  "MD_CLA_RTU",
  "MD_DENB_DH_PREP",
  "MD_DENB_RTU",
  "MD_DFA_DH_PREP",
  "MD_DFA_RTU",
  "MD_DOCA_DH_PREP",
  "MD_EEB_DH_PREP",
  "MD_EEB_RTU",
  "MD_FLM_DH_20_4_0.5",
  "MD_FLM_DH_PREP",
  "MD_FLMPS20_DH_PREP",
  "MD_FLUID-A_RTU",
  "MD_FSCM_DH_PREP",
  "MD_FTGM_DH_PREP",
  "MD_FTGM_RTU",
  "MD_FTTB_DH_PREP",
  "MD_GNB_RTU",
  "MD_ICR_SWAB_RTU",
  "MD_LTB_DH_PREP",
  "MD_LTB_RTU",
  "MD_MCA_DH_PREP",
  "MD_MCA_RTU",
  "MD_MCB_DH_PREP",
  "MD_MCB_RTU",
  "MD_MEA_DH_PREP",
  "MD_MEA_RTU",
  "MD_MLB_DH_PREP",
  "MD_MSA_DH_PREP",
  "MD_MSA_RTU",
  "MD_NF_DH_80_8_0.8",
  "MD_NF_DH_PREP",
  "MD_NF_RTU",
  "MD_PB_DH_PREP",
  "MD_PCA_DH_PREP",
  "MD_PCA_RTU",
  "MD_PEPTONE_DH_1.80PS_5_MGCL2",
  "MD_PEPTONE_DH_1PS80",
  "MD_PEPTONE_DH_PREP",
  "MD_PEPTONE_FLUID-D",
  "MD_PEPTONE_RTU",
  "MD_PHB_4_20_0.5",
  "MD_PHOSPHATE_BUFFER_RTU",
  "MD_PREPARATION",
  "MD_PREPARATION1",
  "MD_QUALIFICATION_ANALYSIS",
  "MD_R2A_DH_PREP",
  "MD_R2A_RTU",
  "MD_R3A_DH_PREP",
  "MD_R3A_RTU",
  "MD_RCM_DH_PREP",
  "MD_RCM_RTU",
  "MD_RMC_DH_PREP",
  "MD_ROUTINE_ANALYSIS",
  "MD_RVSEB_RTU",
  "MD_SALINE_DH",
  "MD_SALINE_SWAB",
  "MD_SBCA_DH_PREP",
  "MD_SBCA_RTU",
  "MD_SCDA_0.5SL_4PS80",
  "MD_SCDA_0.8SL_8PS80",
  "MD_SCDA_1",
  "MD_SCDA_1SL_4PS_20",
  "MD_SCDA_1SL_4PS_80",
  "MD_SCDA_2",
  "MD_SCDA_DH_20_4_0.5",
  "MD_SCDA_DH_80_0.5_0.1",
  "MD_SCDA_DH_80_1_0.5",
  "MD_SCDA_DH_80_2_0.5",
  "MD_SCDA_DH_80_2_1",
  "MD_SCDA_DH_80_3_0.3",
  "MD_SCDA_DH_80_4_0.5",
  "MD_SCDA_DH_80_4_1",
  "MD_SCDA_DH_80_4_4",
  "MD_SCDA_DH_INIT_PREP",
  "MD_SCDA_DH_MGCL2",
  "MD_SCDA_DH_PREP",
  "MD_SCDA_DH_S_0.07",
  "MD_SCDA_DH_S_0.7",
  "MD_SCDA_RTU",
  "MD_SCDA_RTU_0.3SL_2PS_20",
  "MD_SCDA_SLANTS_RTU",
  "MD_SCDA_TST_1",
  "MD_SCDA_TST_2",
  "MD_SCDAPS_RODAC_RTU",
  "MD_SCDAPS_RTU",
  "MD_SCDAPS_RTU_0.3S_3PS80",
  "MD_SCDB_.05M_MGCL2",
  "MD_SCDB_.1M_MGCL2",
  "MD_SCDB_DH_20_4_0.5",
  "MD_SCDB_DH_20_8_2",
  "MD_SCDB_DH_80_0.1",
  "MD_SCDB_DH_80_1",
  "MD_SCDB_DH_80_1_0.5",
  "MD_SCDB_DH_80_2_0.5",
  "MD_SCDB_DH_80_2_0.8",
  "MD_SCDB_DH_80_2_1",
  "MD_SCDB_DH_80_4_0.5",
  "MD_SCDB_DH_80_4_1",
  "MD_SCDB_DH_80_4_2",
  "MD_SCDB_DH_80_5_0.5",
  "MD_SCDB_DH_80_5_0.8",
  "MD_SCDB_DH_80_6_0.6",
  "MD_SCDB_DH_80_6_2",
  "MD_SCDB_DH_80_8",
  "MD_SCDB_DH_80_8_0.8",
  "MD_SCDB_DH_80_8_2",
  "MD_SCDB_DH_INITIAL",
  "MD_SCDB_DH_MLT",
  "MD_SCDB_DH_POST_GPT",
  "MD_SCDB_DH_PS",
  "MD_SCDB_DH_STER",
  "MD_SCDB_DH_WATER",
  "MD_SCDB_RTU_100ML",
  "MD_SCDB_RTU_10ML",
  "MD_SCDB_RTU_90ML",
  "MD_SCDB_WATER",
  "MD_SCDBP_80_500ML",
  "MD_SCDBPS_1SL_8P80",
  "MD_SCDBPS_2SL_4PS20_RTU",
  "MD_SCDBPS_RTU_1000ML",
  "MD_SCDBPS_RTU_100ML",
  "MD_SCDBPS_RTU_10ML",
  "MD_SCDBPS_RTU_300ML",
  "MD_SCDBPS_RTU_500ML",
  "MD_SCDBPS_RTU_80_1",
  "MD_SCDM_1SL_2PS_80",
  "MD_SCDM_1SL_4PS80",
  "MD_SCDM_1SL_8PS20",
  "MD_SCDM_3SL_6PS80",
  "MD_SCDM_3T80_0.3SL",
  "MD_SCDM_4SL_6PS80_DS",
  "MD_SCDM_4SL_6PS80_SS",
  "MD_SCDM_6SL_8PS80",
  "MD_SCDMPS_4SL_6PS20_RTU_100ML",
  "MD_SDA_0.5SL_4PS80",
  "MD_SDA_0.8SL_8PS80",
  "MD_SDA_1SL_4PS_80",
  "MD_SDA_DH_20_4_0.5",
  "MD_SDA_DH_80_2_0.5",
  "MD_SDA_DH_80_3_0.3",
  "MD_SDA_DH_80_4_1",
  "MD_SDA_DH_MGCL2",
  "MD_SDA_DH_PREP",
  "MD_SDA_RTU",
  "MD_SDA_RTU_0.3_2_20",
  "MD_SDA_RTU_20_4_1",
  "MD_SDAC_0.5_4P20",
  "MD_SDAC_DH_PREP",
  "MD_SDAC_RTU",
  "MD_SDB_DH_PREP",
  "MD_SDB_RTU",
  "MD_TSB3P_DH_INITIAL",
  "MD_TSB3P_DH_POST_GPT",
  "MD_TTBGBB_DH_PREP",
  "MD_VRBGA_DH_PREP",
  "MD_VRBGA_RTU",
  "MD_XLDA_DH_PREP",
  "MD_XLDA_RTU",
  "MECHANICAL_STIRRER",
  "MEDIA_LOAD1",
  "MEDIA_LOAD2",
  "MEDIA_LOAD3",
  "MELTING",
  "MERCURIC_BROMIDE_PAPER-BPPH",
  "MERCURIC_CHORIDE_PAPER_IP",
  "METAL_DETECTOR",
  "MICRO_BET",
  "MICRO_MLT",
  "MICRO_PATHOGEN",
  "MICRO_RINSE",
  "MICRO_RINSE_STERILE",
  "MICRO_SWAB",
  "MICRO_SWAB_STERILE",
  "MIDDLE",
  "MIDDLEFILLING",
  "MIDDLESAMPLE",
  "MIDOSTAURIN",
  "MILLED_GRANULES",
  "MILLI-Q",
  "MINIMUM_SPEED",
  "MIXED_BLEND",
  "MLT_MEMBRANE_FILTRATION",
  "MLT_MF_POURPLATE",
  "MLT_MF_SPREADPLATE",
  "MLT_MOSTPROBABLE_NUMBER",
  "MLT_POURPLATE",
  "MLT_SPREADPLATE",
  "MONITORING",
  "MONTHLY",
  "MULTI_SHOT_550",
  "NAOH_1IN5_AS",
  "NGI",
  "NON-AQUA-ELECTRODE_ACTICATION",
  "NONE",
  "OFLINEFILTRATION",
  "OILBATH_HALFYEARLY",
  "ONLINE_CHECKING_WEIGHER",
  "OPTIMUM_SPEED",
  "OVER_COATED_PELLETS",
  "OVER_COATED_POLYMER_SOLUTION",
  "PAM_COATER",
  "PFW",
  "PH_3.5_ACETATE_BUFFER-USP",
  "PH_3.5_ACETATE_BUFFER_R-BP.EP",
  "PILLAR_BLENDER",
  "PM",
  "PM_PH_EUR",
  "PM_TRIAL",
  "POLAROGRAPH_HALFYEARLY",
  "POLISHED_COATED_TABLETS",
  "POLISHED_EC_PELLETS",
  "POLISHED_TABLETS",
  "POLISHINGMACHINE_METALDETECTOR",
  "POST_LYOPHILIZATION",
  "POTASSIUMIODIDETS_AS",
  "POTSSIUM_IODIDE_SOL_R-BPPH.",
  "POWDER_TRANSFER_SYSTEM",
  "PRE-ROLLERCOMPACTION",
  "PRE_COMPRESSION",
  "PRE_LUBRICATED_BLEND",
  "PRE_LUBRICATION",
  "PRE_MIXED_BLEND",
  "PRIMARY_OPL_SUSPENSION-USP",
  "PRIMARYFILTERFLUSH",
  "PRINTED_INSPECTED_TABLETS",
  "PROTECTIVE_COATING_TABLETS",
  "PS",
  "PSC",
  "PSG",
  "PT",
  "PT-RING_ELCTRODE_ACTIVATION",
  "PULSE_RELEASE_TABLETS",
  "PV_CLB_DAD",
  "PV_VERTICAL_3M",
  "PV_VERTICAL_YEARLY",
  "PVP_COATING_SOLUN",
  "PW",
  "QUADRO_COMIL",
  "QUADRO_SIFTER",
  "QUADROCOMILL",
  "QUARTELY",
  "RAPID_MIXER_GRANULATOR",
  "REAGENT",
  "RED_SOL_EP_BP",
  "REMI_STIRRER",
  "REVERSE_EC_PELLETES",
  "REVERSE_ENTERIC_COATING_DISPER",
  "RHEOMETER_CAL",
  "RINSE",
  "RM",
  "RM_IP",
  "RM_MIXED",
  "RM_PH_EUR",
  "RM_REDUCED",
  "RM_TRIAL",
  "RM_VENDOR",
  "RM_WS",
  "RO",
  "ROLL_COMPACTOR",
  "ROTARY_EVAPORATOR",
  "ROW",
  "RS",
  "RW",
  "SAMPLER",
  "SAMPLING_ROD_DIES",
  "SCOOP",
  "SCP",
  "SCREENED-SR-2PELLETS",
  "SCREENED.E.C.PELLETS",
  "SCREENED_DC_PELLETS",
  "SCREENED_DL-PELLETS",
  "SCREENED_DR_PELLETS",
  "SCREENED_DRSEAL_COATED_PELLETS",
  "SCREENED_DRUG_COATED_PELLETS",
  "SCREENED_DRUG_LAYERED_PELLETS",
  "SCREENED_ER_COATED_PELLETS",
  "SCREENED_POLISHED_PELLETS",
  "SCREENED_REC_PELLETS",
  "SCREENED_SEAL_COATED_PELLETS",
  "SCREENED_SR-1_PELLETS",
  "SCREENED_SUB_C-1PELLETS",
  "SCREENED_SUB_C-2PELLETS",
  "SCREENED_SUB_C-PELLETS",
  "SCREENED_TOP_COATED_PELLETS",
  "SCREENEDOCPELLETS",
  "SEAL_COATED_PELLETS",
  "SEAL_COATED_TABLETS",
  "SEAL_COATING_DISPERSION",
  "SEAL_COATING_SOLUTION",
  "SEAL_COATING_SUSPENSION",
  "SECONDSHELF",
  "SECONDSTROKE",
  "SEVENTHSHELF",
  "SFDS",
  "SHELVESSAMPLE",
  "SHIMADZU_FLUSH_UHPLC",
  "SHIMADZU_UHPLC",
  "SHRINK_SLEEVES",
  "SI_DIETHYLDITHIO_SOLUTION-EP",
  "SI_DIETHYLDITHIOCARBAMATES_AS",
  "SI_NITRATE_SOL_R2_EP_BP",
  "SI_NITRATE_TS-USP",
  "SIFTING",
  "SILVER_ELECTRODE_ACTIVATION",
  "SILVERDIETHYLDITHIOCARB_TS_BP",
  "SINGLE_POT_PROCESSOR_1",
  "SINGLE_SHOT",
  "SIXTHSHELF",
  "SO",
  "SODIUM_SULFIDE_SOL_R1-EP.BP",
  "SODIUM_SULPHIDE_SOL-IP",
  "SOLUTION_PREPARATION_TANK",
  "SORVALL_ST4R_PLUS_YEARLY",
  "SP",
  "SPAYED_GRANULES",
  "SPRING_CLEANING_MICRO",
  "SR1_C-PELLETS",
  "SR2_C-PELLETS",
  "STABILITY",
  "STAGE-A_GRANUELS",
  "STANNOUS_CHLORIDE_SOL_R",
  "STARTFILLING",
  "STB",
  "STB_1",
  "STB_DP12",
  "STB_DP6",
  "STB_LEACHABLE",
  "STB_MKT",
  "STD_ARSENIC_SOL-USP",
  "STD_IRON_SOL-USP",
  "STD_PREP_FOR_SULPHATE-BP.EP",
  "STERILEVESSEL",
  "STIRRER",
  "STRATIFIED_SAMPLE",
  "STRONGER_STANNOUS_CHLO.AS-USP",
  "SUB_COAT_SUSPENSION",
  "SUB_COATED_PELLETS",
  "SUB_COATED_TABLETS",
  "SUB_COATING",
  "SUB_COATING_SOLUTION",
  "SUBCOATINGDISPERSION",
  "SULPHATE_STD_SOL_10PPM-IP",
  "SULPHATE_STD_SOL_10PPM_R-EP.BP",
  "SULPHATE_STD_SOL_10PPM_R1",
  "SWAB",
  "SWAB_DETERGENT",
  "SWAB_RINSE",
  "TABLET_COMPRESSION_MACHINE",
  "TABLETCAPSULE_COUNTER",
  "TABLETCAPSULE_SORTER",
  "TALC_SPRINKLED_PELLETS",
  "TANK",
  "THAWED_DS",
  "THIOACETAMIDE_SOLUTION_EP.BP",
  "THIRDSHELF",
  "THIRDSTROKE",
  "TIMEPOINT_1",
  "TIMEPOINT_10",
  "TIMEPOINT_2",
  "TIMEPOINT_3",
  "TIMEPOINT_4",
  "TIMEPOINT_5",
  "TIMEPOINT_6",
  "TIMEPOINT_7",
  "TIMEPOINT_8",
  "TIMEPOINT_9",
  "TIMEPOINTS",
  "TOC",
  "TOP_COATED_PELLETS",
  "TOP_MIDDLE_END_SHELFS",
  "TOPSAMPLE",
  "TOPSHELF",
  "TRANSFER_BIN",
  "TRANSFER_BIN_1",
  "TUBE",
  "UFB",
  "ULTRA_SONICATOR",
  "ULTRASCANPRO_CAL",
  "UNLOADED_BLEND",
  "UPLC_FLUSH",
  "US",
  "USA",
  "USP5",
  "V_SHELL_BLENDER",
  "VALIDATION",
  "VALIDATION1",
  "VAR",
  "VERIFICATION_CHCECK",
  "VESSEL",
  "VIALFILLINGMACHINE",
  "VIALISOLATOR",
  "VISCOMETER",
  "VLT",
  "VLT_LOAD",
  "VO_200",
  "VO_29",
  "VSHELL_BLENDER",
  "W_HPLC_UV_CAD",
  "W_LOOP_CLB",
  "W_PDA",
  "W_PDA_CAD",
  "W_PDA_RID",
  "W_UPLC_LOOP",
  "W_UPLC_PDA",
  "W_UPLC_UV",
  "W_UV_PDA",
  "W_UV_RI",
  "WATER_1M_NAOH_MIX_1_3",
  "WATER_CONTENT",
  "WATERBATH_CALIBRATION",
  "WATERS",
  "WATERS_FLUSH_HPLC",
  "WATERS_UV_CAD",
  "WEEKLY",
  "WEIGH_CHECKED_CAPSULES",
  "WET_MASS",
  "WET_SPHERONISED_PELLETS",
  "WETHOLD",
  "WFI",
  "WRAPPED_LOAD",
  "WS",
  "WS_DCH",
  "YEARLY",
  "YELLOW_REF_SOL-EP",
];

export default GRADE_OPTIONS;
